//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

import { resorts } from './resorts.js'

for(let r of resorts) {
	if (document.getElementById('r' + r.id)) {
		links(r)
	}
	if (document.getElementById('ri' + r.id)) {
		cards(r)
	}
	if (document.getElementById('rc' + r.id)) {
		cams(r)
	}
	if (document.getElementById('rp' + r.id)) {
		passes(r)
	}
}

function links(r_link) {
	let r_list = document.getElementById('r' + r_link.id)
	r_list.innerHTML = `
		<h5><a id="rList" href="${r_link.website}" target="on_blank"><b>${r_link.title}'s Website</b></a></h5>
	`
}
	
function cards(r_card) {
	let r_card_elmt = document.getElementById('ri' + r_card.id)
	r_card_elmt.innerHTML = `
		<div class="card">
			<img src="${r_card.photo}" class="card-img-top" alt="${r_card.title}">
			<div class="card-body">
				<h5 class="card-title">${r_card.title}</h5>
				<p class="card-text">${r_card.location}</p>
				<div>
					<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${r_card.id}" aria-expanded="false" aria-controls="collapseExample">
					More Information
					</button>
				</div>
				<div class="collapse" id="collapse${r_card.id}" data-bs-parent="#myGroup">
					<div class="card card-body border border-0">
						<p>${r_card.description}</p>
						<a class="btn" href="${r_card.website}" target="on_blank"><b>${r_card.title}'s Website</b></a>
					</div>
				</div>
			</div>
		</div>
	`
}

function cams(r_cam) {
	let r_cam_elmt = document.getElementById('rc' + r_cam.id)
	r_cam_elmt.innerHTML = `
		<div class="card">
			<h3><a href="${r_cam.website}" target="on_blank"><b>${r_cam.title}</b></a></h3>
			<p class="text-secondary">${r_cam.location}</p>
			${r_cam.webcam}
		</div>
	`
}

function passes(r_pass) {
	let r_price = document.getElementById('rp' + r_pass.id)
	r_price.innerHTML = `
		<div class="card">
            <img src="${r_pass.photo}" class="card-img-top" alt="${r_pass.title}">
            <div class="card-body">
                <h5 class="card-title">${r_pass.title}</h5>
                <table class="table">
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Season</th>
                            <td>${r_pass.seasonP}</td>
                        </tr>
                        <tr>
                            <th scope="row">Full Day</th>
                            <td>${r_pass.fullP}</td>
                        </tr>
                        <tr>
                            <th scope="row">Half Day</th>
                            <td>${r_pass.halfP}</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <a class="btn" href="${r_pass.website}" target="on_blank"><b>${r_pass.title}'s Website</b></a>
                </div>
            </div>
        </div>
	`
}

addEventListener('submit', event => {
	alert('Thank you for your message')
})