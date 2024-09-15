"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CACCLError = /** @class */ (function (_super) {
    __extends(CACCLError, _super);
    /**
     * Create a new CACCL error
     * @author Gabe Abrams
     * @param opts object containing all arguments
     * @param [opts.message] error message
     * @param [opts.code] error code
     * @param [opts.stack] stack trace to associate with the error
     */
    function CACCLError(opts) {
        var _this = _super.call(this, opts.message) || this;
        _this.message = opts.message || 'An unknown error occurred.';
        _this.name = 'CACCLError';
        _this.code = String(opts.code || 'NOCODE1').toUpperCase();
        _this.stack = opts.stack || new Error(_this.message).stack;
        _this.isCACCLError = true;
        return _this;
    }
    return CACCLError;
}(Error));
exports.default = CACCLError;
//# sourceMappingURL=index.js.map