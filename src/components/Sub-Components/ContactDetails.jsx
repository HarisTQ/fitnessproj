import React from 'react';
import contactdetailclasses from './ContactDetails.module.css';

const ContactDetails = () => {
	return (
		<div className={contactdetailclasses['contact-details__wrapper']}>
			<ul className={contactdetailclasses['contact-details__lists']}>
				<li>
					<h4>Find Us</h4>
					<a>
						<p>
							Bahria Town 
							<br /> 1020 plaza midview
							<br /> Lahore, Pakistam
						</p>
					</a>
				</li>
				<li>
					<h4>General Contact</h4>
					<a>
						<p>
							T – 1 310 556 0155 <br />
							info@Harisfitness525@gamil.com
						</p>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default ContactDetails;
