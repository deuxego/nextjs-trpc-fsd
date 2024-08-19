import { createCallerFactory, createTRPCRouter } from '@/kernel/trpc';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */

/**
 * How to bypass around one-sided architectural boundaries from FSD.
 */
async function aggregateRouters() {
  try {
    // const postRouter = (await import('@/features/post/router')).postRouter;
    // Import other routers similarly

    return createTRPCRouter({
      post: {}
      // other routers
    });
  } catch (error) {
    console.error('Failed to load routers:', error);
    throw error;
  }
}

export const appRouter = await aggregateRouters();

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
