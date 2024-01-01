import Navbarres from "../components/navbarres";
import Footer from "../components/footer";
import { BsFillBookmarkStarFill } from "react-icons/bs"
export default function About() {
	return (<>
		<div className=" h-auto mb-4">
			<Navbarres class="shadow-md" />
			<div className="pt-7 ">
				<div className="flex justify-center space-x-20 items-center xsm:block xsm:space-x-10">
					<div className=" flex justify-center items-center h-[50vh] xsm:h-[250px]">
						<img src="/lib1.jpg" className="h-full shadow-2xl rounded-tl-3xl rounded-br-3xl shadow-zinc-800 xsm:w-[85%] xsm:h-[245px]" alt="" />
					</div>
					<div className="w-[50%] xsm:w-[80%]">
						<div className=" flex justify-center text-center font-serif text-lg font-semibold xsm:mt-5">About Campus Chronicals</div>
						<div className="flex justify-center "><img src="/hr.png" className="w-56" alt="" /></div>
						<div className="text-justify  flex justify-center font-serif mt-2 xsm:w-[100%] xsm:text-base">
							Mohali is rapidly developing the “IT Hub” of Punjab and has emerged as one of the most important cities in northern India. It is rated among the best place for higher education in Punjab.
							The Mohali Campus aims to bring up engineers par excellence, trained to be industry ready professionals to be hired by the best of the companies. Facilitated with the well-qualified and experienced faculty, unique teaching techniques, sate-of- art classrooms and proposed dedicated labs we intend to groom our students into entrepreneurs who are ready to contribute significantly in the rapidly changing, technology-driven society.
							The campus is located in the heart of the Mohali and well connected through roads and railways and to the outside world by the international airport. It is the only Govt. Engineering College run by IKGPTU Kapurthala in Mohali. The mission of IKGPTU Mohali campus-1 is to become fountainhead of technologies.
						</div>
					</div>
				</div>
				<div className="mt-7 flex justify-center xsm:block xsm:w-[100%] ">
					<div className=" w-[50%] leading-loose xsm:w-[100%]">
						<div className="text-center font-serif text-xl font-semibold xsm:w-[100%] ">Salient Features</div>
						<div className="flex justify-center"><img src="/hr.png" className="" alt="" /></div>
						<div className="font-serif mt-2  xsm:w-[90%] xsm:mx-auto  xsm:text-base">
							<div className="flex items-center space-x-2"><div><BsFillBookmarkStarFill /></div><div>PhD Faculty</div></div>
							<div className="flex items-center space-x-2"><div><BsFillBookmarkStarFill /></div><div>Scholarship for Meritorious Students as per University Norms</div></div>
							<div className="flex items-center space-x-2"><div><BsFillBookmarkStarFill /></div><div>Post-Metric Scholarships for SC/ST Students as per Punjab Govt. Rules
							</div></div>
							<div className="flex items-center space-x-2"><div><BsFillBookmarkStarFill /></div><div>Fee-waiver Scheme for Economical Weaker Section (EWS)
							</div></div>
							<div className="flex items-center space-x-2"><div><BsFillBookmarkStarFill /></div><div>ICT enabled Air-Conditioned Class Rooms
							</div></div>
							<div className="flex items-center space-x-2"><div><BsFillBookmarkStarFill /></div><div>Fully Wi-Fi Campus
							</div></div>
							<div className="flex items-center space-x-2"><div><BsFillBookmarkStarFill /></div><div>Free Access to E-books & Reputed Journals
							</div></div>
							<div className="flex items-center space-x-2"><div><BsFillBookmarkStarFill /></div><div>Hi-Tech Conference Room and Seminar Halls
							</div></div>
							<div className="flex items-center space-x-2"><div><BsFillBookmarkStarFill /></div><div>Indoor & Outdoor Sports Activities
							</div></div>
							<div className="flex items-center space-x-2"><div><BsFillBookmarkStarFill /></div><div>Transportation Facility
							</div></div>
							<div className="flex items-center space-x-2"><div><BsFillBookmarkStarFill /></div><div>7 Km from ISBT Sector-43, Chandigarh
							</div></div>
							<div className="flex items-center space-x-2"><div><BsFillBookmarkStarFill /></div><div>2 Km from Mohali Bus Stand</div></div>

						</div>

					</div>

					<div className=" min-w-[40%] text-justify font-serif ">
						<div className="text-center text-xl font-semibold xsm:mt-7"> Programms Offered</div>
						<div className="flex justify-center mb-2"><img className="w-44" src="/hr.png" alt="" /></div>
						<div className=" leading-loose xsm:w-[90%] xsm:mx-auto  xsm:text-base">
							<div className="flex items-center  space-x-2 "><div><BsFillBookmarkStarFill /></div><div>Bachelor of Computer Science and Engineering (4 years) </div></div>
							<div className="flex items-center space-x-2  mt-2"><div><BsFillBookmarkStarFill /></div><div>Bachelor of Computer Science and Engineering Lateral Entry (3 years) </div></div>
						</div>

					</div>

				</div>

				<div>
					<div className="mission flex mt-3 justify-around font-serif xsm:block xsm:w-[100%] " >
						<div className="w-[100%]">
							<div className="text-center font-semibold text-xl flex justify-center xsm:mt-7">Our Mission</div>
							<div className="flex justify-center"><img className="w-40" src="/hr.png" alt="" /></div>
							<div className="text-justify mt-0 flex xsm:w-[100%] xsm:bg-[url('/mission.png')] xsm:bg-no-repeat xsm:bg-center xsm:bg-opacity-50">
								<div className="flex w-[50%] my-auto ml-10 xsm:w-[90%] xsm:mx-auto xsm:text-sm">
									To provide seamless education through the pioneering use of
									technology, in partnership with industry and society with a view to
									promote research, discovery and entrepreneurship and to prepare
									its students to be responsible citizens of the world and the leaders
									of technology and techno-innovation of the 21st Century by
									developing in them the desirable knowledge, skill and attitudes
									base for the world of work and by instilling in them a culture for
									seamless in all facets of life.
								</div>
						<div className=" w-[50%] flex justify-center items-center  xsm:hidden"><img className=" rounded" src="/mission.png" alt="" /></div>
							</div>
						</div>
					</div>
					<div></div>
				</div>

				<div>
					<div className="mission flex mt-3 justify-around font-serif xsm:block xsm:w-[100%] " >
						<div className="w-[100%]">
							<div className="text-center font-semibold text-xl flex justify-center">Our Vision</div>
							<div className="flex justify-center"><img className="w-40" src="/hr.png" alt="" /></div>
							<div className="text-justify mt-0 flex xsm:w-[100%] xsm:bg-[url('/vision.png')] xsm:bg-no-repeat xsm:bg-center xsm:bg-opacity-100">
						<div className=" w-[50%] flex justify-center items-center  xsm:hidden"><img className="h-40 rounded" src="/vision.png" alt="" /></div>
								<div className="flex w-[50%] my-auto mr-20 xsm:w-[90%] xsm:mx-auto xsm:bg-cover  xsm:text-sm">
								To be an institution of excellence in the domain of higher technical education that serves as the fountainhead for nurturing the future leaders of technology and techno-innovation responsible for the techno-economic, social, cultural and environmental prosperity of the people of the State of Punjab, the Nation and the World.
								</div>
							</div>
						</div>
					</div>
					<div></div>
				</div>

				<div className="mt-3 about container xsm:hidden">
					<div className="text-center font-serif font-semibold text-xl">Fee Structure</div>
					<div className=" font-serif text-lg mt-4">B.Tech CSE</div>
					<table width="100%" className="mt-2">
						<thead>
							<tr>
								<th align="left" >
									S.No.</th>
								<th align="left">
									Content</th>
								<th align="left">
									1st Semester</th>
								<th align="left">
									2nd Semester</th>
								<th align="left">
									III/V/VII</th>
								<th align="left">
									IV/VI/VIII</th>
							</tr>
						</thead>
						<tbody>
							<tr className="">
								<td>
									<strong>1.</strong></td>
								<td>
									Tuition Fee</td>
								<td>
									30,000.00</td>
								<td>
									30,000.00</td>
								<td>
									30,000.00</td>
								<td>
									30,000.00</td>
							</tr>
							<tr>
								<td>
									<strong>2.</strong></td>
								<td>
									Development Fund</td>
								<td>
									4,300.00</td>
								<td>
									4,300.00</td>
								<td>
									4,300.00</td>
								<td>
									4,300.00</td>
							</tr>
							<tr>
								<td>
									<strong>3.</strong></td>
								<td>
									Student Related Fund</td>
								<td>
									2,700.00</td>
								<td>
									2,700.00</td>
								<td>
									2,700.00</td>
								<td>
									2,700.00</td>
							</tr>
							<tr>
								<td>
									<strong>4.</strong></td>
								<td>
									Securities (Refundable)</td>
								<td>
									8,000.00</td>
								<td>
									&nbsp;</td>
								<td>
									&nbsp;</td>
								<td>
									&nbsp;</td>
							</tr>
							<tr>
								<td>
									<strong>5.</strong></td>
								<td>
									Other Fee</td>
								<td>
									1,600.00</td>
								<td>
									&nbsp;</td>
								<td>
									&nbsp;</td>
								<td>
									&nbsp;</td>
							</tr>
							<tr>
								<td colSpan="2">
									<strong>Total Fee</strong></td>
								<td>
									46,600.00</td>
								<td>
									37,000.00</td>
								<td>
									37,000.00</td>
								<td>
									37,000.00</td>
							</tr>
						</tbody>
					</table>

					<div className="about mt-4">
						<div className=" font-serif text-lg mt-3">B.Tech CSE LEET</div>
						<table width="100%" className="table1 mt-2">
							<thead className="bg-amber-800 ">
								<tr className="">
									<th align="left" className="pl-2">
										S.No.</th>
									<th align="left">
										Content</th>
									<th align="left">
										3rd Semester</th>
									<th align="left">
										4th Semester</th>
									<th align="left">
										V/VII</th>
									<th align="left">
										<strong>VI/VIII</strong></th>
								</tr>
							</thead>
							<tbody className="py-10">
								<tr className="pt-5">
									<td>
										<strong>1.</strong></td>
									<td>
										Tuition Fee</td>
									<td>
										30,000.00</td>
									<td>
										30,000.00</td>
									<td>
										30,000.00</td>
									<td>
										30,000.00</td>
								</tr>
								<tr>
									<td>
										<strong>2.</strong></td>
									<td>
										Development Fund</td>
									<td>
										4,300.00</td>
									<td>
										4,300.00</td>
									<td>
										4,300.00</td>
									<td>
										4,300.00</td>
								</tr>
								<tr>
									<td>
										<strong>3.</strong></td>
									<td>
										Student Related Fund</td>
									<td>
										2,700.00</td>
									<td>
										2,700.00</td>
									<td>
										2,700.00</td>
									<td>
										2,700.00</td>
								</tr>
								<tr>
									<td>
										<strong>4.</strong></td>
									<td>
										Securities (Refundable)</td>
									<td>
										8,000.00</td>
									<td>
										&nbsp;</td>
									<td>
										&nbsp;</td>
									<td>
										&nbsp;</td>
								</tr>
								<tr>
									<td>
										<strong>5.</strong></td>
									<td>
										Other Fee</td>
									<td>
										1,600.00</td>
									<td>
										&nbsp;</td>
									<td>
										&nbsp;</td>
									<td>
										&nbsp;</td>
								</tr>
								<tr>
									<td colSpan="2">
										<strong>Total Fee</strong></td>
									<td>
										46,600.00</td>
									<td>
										37,000.00</td>
									<td>
										37,000.00</td>
									<td>
										37,000.00</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div className="container xsm:w-[70%] about mt-7">
					<div className="text-center font-serif font-semibold text-xl">Scholarship Schemes</div>
					<table width="100%" className="  mt-2">
						<thead>
							<tr>
								<th align="left" width="40%" >
									Scholarship</th>
								<th align="left" width="30%">
									Link</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									Prime Minister Scholarship Scheme (PMSS) for SC/ST &amp; OBC Students</td>
								<td>
									<a href="http://www.scholarships.punjab.gov.in/">Click Here</a></td>
							</tr>
							<tr>
								<td>
									National Scholarship Portal&nbsp; (NSP) for any state Students</td>
								<td>
									<a href="https://scholarships.gov.in/">Click Here </a></td>
							</tr>
						</tbody>
					</table>
					</div>
				</div>



			</div>
		<Footer />
	</>)
}

