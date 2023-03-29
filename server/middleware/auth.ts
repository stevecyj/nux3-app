import { H3Event } from 'h3';

// 檢查是否已驗證
function authCheck(event: H3Event) {
  // 取出 token，簡易檢查
  const token = getHeader(event, 'token');
  if (!token) {
    return false;
  }
  return true;
}

function protectAuthRoute(event: H3Event) {
  const protectedRoutes = ['/api/detail'];
  //  以 protectedRoutes 為起始 以外的 path 允許請求
  if (
    !event?.path ||
    !protectedRoutes.some((route) => event.path?.startsWith(route))
  ) {
    return true;
  }
  return authCheck(event);
}

export default defineEventHandler((event) => {
  const isAllowed = protectAuthRoute(event);
  if (!isAllowed) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: 'Unauthorized' }),
    );
  }
});
