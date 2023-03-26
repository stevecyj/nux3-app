export default defineEventHandler((event) => {
  console.log(!Number.isInteger(event.context.params!.id));
  const id = parseInt(event.context.params!.id) as number;
  if (!Number.isInteger(event.context.params!.id)) {
    console.log(123);
    throw createError({
      statusCode: 400,
      statusMessage: 'ID must be integer',
    });
  }
  return 'okok';
});
