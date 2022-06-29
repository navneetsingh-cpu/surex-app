const myApp = angular.module("myApp", []);

myApp.controller("MyCtrl", function ($scope) {
  $scope.validateModel = function name(params) {
    $scope.validModel = $scope.phone.length > 9 ? $scope.phone : null;
  };
});

// Excercise 1
myApp.directive("canadaPhone", function ($filter, $browser) {
  return {
    require: "ngModel",
    link: function ($scope, $element, $attrs, ngModelCtrl) {
      const listener = function () {
        var value = $element.val().replace(/[^0-9]/g, "");
        $element.val($filter("tel")(value, false));
      };

      // This runs when we update the text field
      ngModelCtrl.$parsers.push(function (viewValue) {
        return viewValue.replace(/[^0-9]/g, "").slice(0, 10);
      });

      // This runs when the model gets updated on the scope directly and keeps our view in sync
      ngModelCtrl.$render = () => {
        $element.val($filter("tel")(ngModelCtrl.$viewValue, false));
      };

      $element.bind("change", listener);
      $element.bind("keydown", (event) => {
        const key = event.keyCode;
        // If the keys include the CTRL, SHIFT, ALT, or META keys, or the arrow keys, do nothing.
        // This lets us support copy and paste too
        if (key == 91 || (15 < key && key < 19) || (37 <= key && key <= 40)) {
          return;
        }
        $browser.defer(listener); // Have to do this or changes don't get picked up properly
      });

      $element.bind("paste cut", () => {
        $browser.defer(listener);
      });
    },
  };
});
myApp.filter("tel", function () {
  return function (tel) {
    if (!tel) {
      return "";
    }

    let value = tel.toString().trim().replace(/^\+/, "");

    if (value.match(/[^0-9]/)) {
      return tel;
    }

    let city, number;

    switch (value.length) {
      case 1:
        if (value === "1") {
          value = "";
        }
      case 2:
      case 3:
        city = value;
        break;

      default:
        city = value.slice(0, 3);
        number = value.slice(3);
    }

    if (number) {
      if (number.length > 3) {
        number = number.slice(0, 3) + "-" + number.slice(3, 7);
      } else {
        number = number;
      }

      return ("(" + city + ") " + number).trim();
    } else {
      if (city) {
        return "(" + city;
      } else {
        return "";
      }
    }
  };
});

// Excercise 2
