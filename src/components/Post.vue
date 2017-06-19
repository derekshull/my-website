<template>
	<div class="hello">
		<section class="featured">
			<h1 style="margin-top:0px;">Featured Post:</h1>
			<h2>Sample Blog Post Title</h2>
			<p style="font-size:18px;">
				Description of the sample blog post wil be here.  It could have two sentences at most.
				<a class="cta" style="max-width:400px; margin:15px auto 0px;" href="#">Read More</a>
			</p>
		</section>

		{{post.title}}
	</div>
</template>

<script>
	import { getPost } from './posts.js'
	export default {
		name: 'blog',
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
				getPost(this.$route.params.postId, (err, post) => {
					this.loading = false;
					if (err) {
						this.error = err.toString();
					} else {
						this.post = post;
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

	.post {
		width: 100%;
		max-width:500px;
		padding:20px 10px;
	}

	.post-container {
		box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
		transition: box-shadow 0.3s cubic-bezier(.25,.8,.25,1);
		border-radius: 5px;
		margin: 10px 0px;
		background:white;
		display:flex;
		flex-direction:column;
		justify-content:space-between;
		height:100%;
	}

	.post-container:hover {
		box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
	}

	.post .post-photo {
		font-size: 26px;
		font-weight: 500;
		padding: 30px 0px;
		-webkit-animation: slide 30s linear infinite;
	}

	.post .post-photo.inverted {
		color:white;
	}

	.post .post-text {
		padding:0px 10px;
	}

	.post .post-cta-container {
		padding:10px;
		border-top: 1px solid #e2e2e2;
		text-align:left;
		display:flex;
		align-items:center;
	}

	.post .post-tags {
		display:flex;
		justify-content: flex-end;
		width:70%;
		flex-wrap: wrap;
	}

	.post .post-tag {
		padding: 5px 15px;
		background: #03a9f4;
		color: white;
		border-radius: 15px;
		margin:5px 10px;
	}

	.post .post-cta {
		color: #ffab40;
		text-decoration: none;
		font-size:18px;
		display: block;
    	width: 30%;
	}

	.post .post-cta:hover {
		color: #ffd8a6;
		text-decoration: none;
	}

	@media(min-width:768px) {
		.post {
			width: calc(100% / 2);
		}
	}

	@media(min-width:1101px) {
		.post {
			width: calc(100% / 3);
		}
	}
</style>
