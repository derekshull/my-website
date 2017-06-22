<template>
	<div class="hello">
		<section class="post-header">
			<h1 style="margin-top:0px;">{{post.title}}</h1>
			<p style="font-size:18px;">
				{{post.description}}
			</p>
		</section>

		<section class="post-body" v-html="post.body">
		</section>
	</div>
</template>

<script>
	import { getPost } from './posts.js'
	export default {
		name: 'post',
		data() {
			return {
				loading: false,
				post: null,
				error: null
			};
		},
		created () {
			this.fetchData()
		},
		watch: {
			'$route': 'fetchData'
		},
		methods: {
			fetchData () {
				this.error = this.post = null;
				this.loading = true;
				getPost(window.location.pathname+window.location.hash, (err, post) => {
					this.loading = false;
					if (err) {
						this.error = err.toString();
					} else {
						this.post = post;
						document.title = this.post.title
						document.head.querySelector('meta[name=description]').content = this.post.description;
					}
				});
			}
		},
	};
</script>

	<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.post-header {
		background: #efefef url("https://www.toptal.com/designers/subtlepatterns/patterns/black_linen_v2.png") repeat 0 0;
		padding:50px 20px;
		color:white;
	}

	.post-header p {
		padding:0 20px;
		max-width: 900px;
		margin:0 auto;
	}
</style>
