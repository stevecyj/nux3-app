import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { tryCatch } from 'standard-as-callback/built/utils';

// 文章目录
const postsDir = path.join(process.cwd(), 'content');

export default defineEventHandler(async (event) => {
  console.log(event.context);
  const fileName = getRouterParam(event, 'id') + '.md';

  try {
  } catch (error) {}
  // 获取文章内容
  const fullPath = path.join(postsDir, fileName);

  try {
    fs.accessSync(fullPath);
    const fileContent = fs.readFileSync(fullPath, 'utf-8');

    // 解析扉页信息
    const matterInfo = matter(fileContent);

    // 转换markdown为HTML
    const processedContent = await remark()
      .use(html)
      .process(matterInfo.content);
    const content = processedContent.toString();

    return {
      title: matterInfo.data.title,
      content,
    };
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: 'article not exist',
    });

    // return sendError(
    //   event,
    //   createError({
    //     statusCode: 404,
    //     statusMessage: 'article not exist',
    //   }),
    // );
  }
});
