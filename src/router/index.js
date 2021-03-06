// Views
import Vue from "vue";
import Router from "vue-router";
import Hello from "@/views/Hello";
import Blog from "@/views/Blog";
import Post from "@/views/Post";
import Talks from "@/views/Talks";
import Talk from "@/views/Talk";

// External Scripts
import AOS from "@/../node_modules/aos/dist/aos";

Vue.use(Router);

const router = new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "Hello",
			component: Hello,
		},
		{
			path: "/blog",
			name: "Blog",
			component: Blog,
		},
		{
			path: "/blog/:postId",
			name: "Post",
			component: Post,
		},
		{
			path: "/talks",
			name: "Talks",
			component: Talks,
		},
		{
			path: "/talks/:postId",
			name: "Talk",
			component: Talk,
		},
	],
});

router.beforeEach((to, from, next) => {
	window.scrollTo(0, 0);
	next();
});

AOS.init({
	delay: 100,
});

export default router;
