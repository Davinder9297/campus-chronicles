import Navbar from '../../components/navbar'
export default function Placement_record(){
    return(<>
    <Navbar/>
    <div className=" h-32 bg-slate-100 bg-gradient-to-r from-sky-200 via-purple-400 to-pink-400">
        <div className=" w-[70%] py-10 text-left pl-20 text-slate-800 font-extrabold font-serif text-4xl "> PLACEMENT RECORD</div>   
         </div>
    
    
<div className="mt-5 about container">
<div className=" w- full bg-sky-100 text-start font-mono font-bold text-2xl">Batch: 2018-2022
</div>
<div className=" font-serif text-lg mt-4">B.Tech CSE</div>
	<table width="100%" className="mt-2">
		<thead>
			<tr>
				<th align="left" >
					S.No.</th>
				<th align="center">
					Picture</th>
				<th align="left">
					Name</th>
				<th align="left">
					Company</th>
				<th align="left">
					</th>
				{/* <th align="left">
					IV/VI/VIII</th> */}
			</tr>
		</thead>
		<tbody >
			<tr className=" text-lg font-semibold">
				<td>
					<strong>1.</strong></td>
				<td>
					<img className='w-64 h-44' src='/plac_home.jpeg' alt=''/></td>
				<td>
                Glimpse Salwan</td>
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
				<td colspan="2">
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
		<thead className="bg-green-600 ">
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
				<td colspan="2">
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
    
    </>)
}