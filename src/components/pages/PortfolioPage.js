import React from "react";

const PortfolioPage = () => {
  return (
    <section id="works" class="shadow-blue white-bg padding">
    <h3 class="section-title">Portfolio</h3>
    <div class="spacer" data-height="80"></div>
			<ul class="portfolio-filter list-inline">
				<li class="current list-inline-item" data-filter="*">All Projects</li>
				<li class="list-inline-item" data-filter=".branding">Branding</li>
				<li class="list-inline-item" data-filter=".creative">Creative</li>
				<li class="list-inline-item" data-filter=".design">Design</li>
				<li class="list-inline-item" data-filter=".video">Video</li>
			</ul>

		
			<div class="pf-filter-wrapper mb-4">
				<select class="portfolio-filter-mobile">
					<option value="*">Everything</option>
					<option value=".creative">Creative</option>
					<option value=".video">Video</option>
					<option value=".design">Design</option>
					<option value=".branding">Branding</option>
				</select>
			</div>

		
			<div class="row portfolio-wrapper">
				
			
				<div class="col-md-4 col-sm-6 grid-item video">
					<a href="work-single.html">
						<div class="portfolio-item">
							<div class="details">
								<h4 class="title">Creative Art</h4>
								<span class="term">Art, Creative</span>
							</div>
							<span class="plus-icon">+</span>
							<div class="thumb">
								<img src="https://via.placeholder.com/800x600" alt="Portfolio-title" />
								<div class="mask"></div>
							</div>
						</div>
					</a>
				</div>

		
				<div class="col-md-4 col-sm-6 grid-item creative design">
					<a href="work-single.html">
						<div class="portfolio-item">
							<div class="details">
								<h4 class="title">Apple USB</h4>
								<span class="term">Creative, Design</span>
							</div>
							<span class="plus-icon">+</span>
							<div class="thumb">
								<img src="https://via.placeholder.com/800x600" alt="Portfolio-title" />
								<div class="mask"></div>
							</div>
						</div>
					</a>
				</div>

	
				<div class="col-md-4 col-sm-6 grid-item branding">
					<a href="work-single.html">
						<div class="portfolio-item">
							<div class="details">
								<h4 class="title">Work Space</h4>
								<span class="term">Branding</span>
							</div>
							<span class="plus-icon">+</span>
							<div class="thumb">
								<img src="https://via.placeholder.com/800x600" alt="Portfolio-title" />
								<div class="mask"></div>
							</div>
						</div>
					</a>
				</div>

				<!-- portfolio item -->
				<div class="col-md-4 col-sm-6 grid-item creative">
					<a href="work-single.html">
						<div class="portfolio-item">
							<div class="details">
								<h4 class="title">Creative Bulb</h4>
								<span class="term">Creative</span>
							</div>
							<span class="plus-icon">+</span>
							<div class="thumb">
								<img src="https://via.placeholder.com/800x600" alt="Portfolio-title" />
								<div class="mask"></div>
							</div>
						</div>
					</a>
				</div>

				
				<div class="col-md-4 col-sm-6 grid-item video branding">
					<a href="work-single.html">
						<div class="portfolio-item">
							<div class="details">
								<h4 class="title">iPhone 8</h4>
								<span class="term">Art, Branding</span>
							</div>
							<span class="plus-icon">+</span>
							<div class="thumb">
								<img src="https://via.placeholder.com/800x600" alt="Portfolio-title" />
								<div class="mask"></div>
							</div>
						</div>
					</a>
				</div>

		
				<div class="col-md-4 col-sm-6 grid-item creative design">
					<a href="work-single.html">
						<div class="portfolio-item">
							<div class="details">
								<h4 class="title">Minimal Art</h4>
								<span class="term">Design, Creative</span>
							</div>
							<span class="plus-icon">+</span>
							<div class="thumb">
								<img src="https://via.placeholder.com/800x600" alt="Portfolio-title" />
								<div class="mask"></div>
							</div>
						</div>
					</a>
				</div>

			</div>
			

			<div class="load-more text-center mt-4">
				<a href="javascript:" class="btn btn-default"><i class="fas fa-circle-notch"></i> Load more</a>
				<!-- numbered pagination (hidden for infinite scroll) -->
				<ul class="portfolio-pagination list-inline d-none">
					<li class="list-inline-item">1</li>
					<li class="list-inline-item"><a href="works-2.html">2</a></li>
				</ul>
			</div>
		</section>

  )
};

export default PortfolioPage;
