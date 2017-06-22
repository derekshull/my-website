<template>
	<div class="hello">
		<section class="featured">
			<h1 style="margin-top:0px;">Latest Talk:</h1>
			<h2>{{featuredPost.title}}</h2>
			<p style="font-size:18px;">
				{{featuredPost.description}}
				<a class="cta" style="max-width:400px; margin:15px auto 0px;" target="_blank" v-if="featuredPost.openInNewWindow" :href="featuredPost.url">Read More</a>
				<a class="cta" style="max-width:400px; margin:15px auto 0px;" v-else :href="featuredPost.url">Read More</a>
			</p>
		</section>

		<section>
			<div class="cards">
				<ms-post v-for="(post, index) in posts" v-if="index > 0" :post-data="post" :key="post.id"></ms-post>
			</div>
		</section>
	</div>
</template>

<script>
	import { getAllPosts } from './posts.js'
	export default {
		name: 'talks',
		data() {
			return {
				loading: false,
				posts: null,
				featuredPost: null,
				error: null
			};
		},
		created () {
			this.fetchData()
			document.title = "Talks by Matt Shull"
			document.head.querySelector('meta[name=description]').content = "Matt Shull has spoken at many conferences over the years and continues to speak on web performance and development.  This is a collection of those talks.";
		},
		watch: {
			'$route': 'fetchData'
		},
		methods: {
			fetchData () {
				this.error = this.post = null;
				this.loading = true;
				getAllPosts("talk", (err, posts) => {
					this.loading = false;
					if (err) {
						this.error = err.toString();
					} else {
						this.featuredPost = posts[0];
						this.posts = posts;
					}
				});
			}
		},
	};
</script>

	<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.featured {
		background: #efefef url("https://www.toptal.com/designers/subtlepatterns/patterns/whitey.png") repeat 0 0;
		padding:50px 20px;
	}

	.featured p {
		margin:0 auto;
		max-width:900px;
		padding:0px 20px;
	}

	.hero-bkg-animated {
		background: white url("../assets/witewall_3.png") repeat 0 0;
		width: 100%;
		margin: 0;
		text-align: center;
		height: 150px;
		display:flex;
		box-sizing: border-box;
		-webkit-animation: slide 30s linear infinite;
		box-shadow: 0 11px 7px -11px #000000;
	}

	.hero-bkg-animated h1 {
		display: flex;
		justify-content: center;
		align-items: center;
		padding:0px 20px;
	}

	.hero-bkg-animated img {
		max-height: 300px;
		display:none;
	}

	@media(min-width:768px) {
		.hero-bkg-animated img {
			display:inline-block;
		}
	}

	@-webkit-keyframes slide {
		from { background-position: 0 0; }
		to { background-position: -400px 0; }
	}

	.posts {
		padding:0px;
		margin:0px;
		list-style:none;
		display:flex;
		flex-wrap:wrap;
		justify-content: space-around;
	}
</style>
