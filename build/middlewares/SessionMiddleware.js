"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
exports.default = (req, _res, next) => {
    // terrible, I know
    const accessToken = req.headers['x-access-token'] && req.headers['x-access-token'].split(' ')[1];
    if (!accessToken)
        return next();
    try {
        const token = jsonwebtoken_1.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        req.user = token;
        next();
    }
    catch (err) {
        next();
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Vzc2lvbk1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWlkZGxld2FyZXMvU2Vzc2lvbk1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrQ0FBc0M7QUFFdEMsa0JBQWUsQ0FBQyxHQUFZLEVBQUUsSUFBYyxFQUFFLElBQWtCLEVBQUUsRUFBRTtJQUNoRSxtQkFBbUI7SUFDbkIsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFLLEdBQUcsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFN0csSUFBSSxDQUFDLFdBQVc7UUFBRSxPQUFPLElBQUksRUFBRSxDQUFDO0lBRWhDLElBQUk7UUFDQSxNQUFNLEtBQUssR0FBUSxxQkFBTSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDeEUsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFFakIsSUFBSSxFQUFFLENBQUM7S0FDVjtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YsSUFBSSxFQUFFLENBQUM7S0FDVjtBQUNMLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRGdW5jdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgdmVyaWZ5IH0gZnJvbSAnanNvbndlYnRva2VuJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChyZXE6IFJlcXVlc3QsIF9yZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcclxuICAgIC8vIHRlcnJpYmxlLCBJIGtub3dcclxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gcmVxLmhlYWRlcnNbJ3gtYWNjZXNzLXRva2VuJ10gJiYgKHJlcS5oZWFkZXJzWyd4LWFjY2Vzcy10b2tlbiddIGFzIHN0cmluZykuc3BsaXQoJyAnKVsxXTtcclxuXHJcbiAgICBpZiAoIWFjY2Vzc1Rva2VuKSByZXR1cm4gbmV4dCgpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW46IGFueSA9IHZlcmlmeShhY2Nlc3NUb2tlbiwgcHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOX1NFQ1JFVCk7XHJcbiAgICAgICAgcmVxLnVzZXIgPSB0b2tlbjtcclxuXHJcbiAgICAgICAgbmV4dCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgbmV4dCgpO1xyXG4gICAgfVxyXG59O1xyXG4iXX0=