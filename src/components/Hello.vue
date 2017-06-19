<template>
	<div class="hello">
		<div class="hero-bkg-animated">
			<img src="../assets/headshot.jpg" class="header-headshot">
			<h1>I'm a developer and entrepreneur creating delightful products and services on the web.</h1>
		</div>

		<section class="message-box">
			<div class="column flex-column">
				<h3>This is an important announcement!</h3>
				<div>This is some detail about the special announcement.  It will have a <a href="#">call to action</a>!</div>
			</div>
			<div class="column">
				<a class="call-to-action">Learn More</a>
			</div>
		</section>

		<section class="thirds-area" data-aos="fade-up" data-aos-once="true">
			<div class="a-third">
				<img class="third-icon" src="/static/icons/world.svg">
				<h3>Web Apps</h3>
				<p>I build awesome web apps with tech like push notifications, web components, and responsive design.</p>
				<a class="cta" href="#">Learn More</a>
			</div>
			<div class="a-third" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
				<img class="third-icon" src="/static/icons/speedometer.svg">
				<h3>Web Performance</h3>
				<p>#webperf is important for your users and your bottom line.  Let me help your team analyze and fix issues.</p>
				<a class="cta" href="#">Schedule Meeting</a>
			</div>
			<div class="a-third" data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
				<img class="third-icon" src="/static/icons/man.svg">
				<h3>Speaking</h3>
				<p>I love sharing what I've learned by speaking at conferences or teaching teams.  Get in touch for more info!</p>
				<a class="cta" href="#">Let's Chat</a>
			</div>
		</section>

		<section class="bg-gray feed">
			<h2>Latest Content</h2>
			<ul class="cards">
				<li class="card">
					<article class="card-container">
						<div class="card-photo inverted" style="background: white url('https://www.toptal.com/designers/subtlepatterns/patterns/dark-triangles.png') repeat 0 0;">
							Sample Text Goes Here
						</div>
						<p class="card-text">
							This is some example description text to discuss what the card is about.  It will probably be this long.
						</p>
						<div class="card-cta">
							<a class="cta" href="#">Read More</a>
						</div>
					</article>
				</li>

				<li class="card">
					<article class="card-container">
						<div class="card-photo" style="background: white url('/static/bgphotos/witewall_3.png') repeat 0 0;">
							Sample Text Goes Here
						</div>
						<p class="card-text">
							This is some example description text to discuss what the card is about.  It will probably be this long.
						</p>
						<div class="card-cta">
							<a class="cta" href="#">Read More</a>
						</div>
					</article>
				</li>

				<li class="card">
					<article class="card-container">
						<div class="card-photo inverted" style="background: white url('https://www.toptal.com/designers/subtlepatterns/patterns/pink%20dust.png') repeat 0 0;">
							Sample Text Goes Here
						</div>
						<p class="card-text">
							This is some example description text to discuss what the card is about.  It will probably be this long.
						</p>
						<div class="card-cta">
							<a class="cta" href="#">Read More</a>
						</div>
					</article>
				</li>
			</ul>
			<p>
				View all <a href="/#/talks">videos</a> and <a href="/#/articles">articles</a>.
			</p>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
			};
		},
	};

	AOS.init({
		duration: 1000,
	});
</script>

	<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hero-bkg-animated {
		background: white url("../assets/witewall_3.png") repeat 0 0;
		width: 100%;
		margin: 0;
		text-align: center;
		height: 300px;
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

	/*THIRDS AREA*/
	.thirds-area {
		display:block;
		padding:50px 0px;
	}

	.a-third {
		width: 100%;
		padding:5px 20px;
		max-width:450px;
		margin:0 auto;
	}

	.a-third:not(:first-of-type) {
		margin-top:15px;
	}

	.a-third h3 {
		font-size:20px;
	}

	.third-icon {
		display:block;
		margin:0 auto;
		max-width:100px;
	}

	@media(min-width:768px) {
		.thirds-area {
			display:flex;
		}

		.a-third {
			width: calc(100% / 3);
			margin:0px;
			max-width:100%;
		}

		.a-third:not(:first-of-type) {
			margin-top:0px;
		}
	}
</style>
