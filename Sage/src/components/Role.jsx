import React from 'react'
import "../index.css"
import AL from "../assets/Svg/AngleLeft.svg"
import AR from "../assets/Svg/AngleRight.svg"
import Google from "../assets/Img/Google.png"
import Report from "../assets/Svg/Report.svg"

const Role = () => {
    return (
        <div className='flex flex-col px-20 py-8  Role justify-center gap-8 items-center'>
            <div className='flex w-full items-center relative'>
                <div className='flex flex-col gap-2'>
                    <div className=' font-engagement text-6xl py-2'>Find exciting projects to work on.</div>
                    <div className='font-inter px-2'>Browse curated opportunities to collaborate and make a meaningful impact with your skills.</div>
                </div>
                {/* <div className='flex gap-4 w-14 self-center absolute right-36 top-6'>
                    <img src={AL} alt="" className='cursor-pointer'/>
                    <img src={AR} alt="" className='cursor-pointer'/>
                </div> */}
            </div>
            <div className='w-full flex flex-col gap-6'>
                <div className='w-full bg-gray-100 p-6 rounded-md gap-4 flex flex-col'>
                    <div className='flex justify-between w-full relative'>
                        <div className='flex gap-2'>
                            <div className='w-20 rounded-xl'><img src={Google} alt="Logo" className='w-full' /></div>
                            <div className='flex flex-col font-inter pt-1 gap-[2px]'>
                                <div className='font-semibold text-lg'>Google</div>
                                <div className='text-sm font-medium'>Google is a tech giant known for its search engine, ads, cloud services, and AI innovations.</div>
                                <div className='text-sm font-medium'>Team Size - 10/15</div>
                            </div>
                        </div>
                    </div>
                    {/* <div>To write tags </div> */}
                    <div className='border-[1px] border-gray-400 flex py-2 px-3 rounded-xl font-inter justify-between items-center'>
                        <div className='font-medium w-1/3'> Senior Software Engineer</div>
                        <div className='cursor-pointer'>• Responsibilities</div>
                        <div className='cursor-pointer'>• Skills</div>
                        <div className='cursor-pointer bg-black rounded-xl text-white py-1 px-2'>Interested</div>
                    </div>
                    <div className='border-[1px] border-gray-400 flex py-2 px-3 rounded-xl font-inter justify-between items-center'>
                        <div className='font-medium w-1/3'> Strategy and Operations Manager</div>
                        <div className='cursor-pointer'>• Responsibilities</div>
                        <div className='cursor-pointer'>• Skills</div>
                        <div className='cursor-pointer bg-black rounded-xl text-white py-1 px-2'>Interested</div>
                    </div>
                    <div className='border-[1px] border-gray-400 flex py-2 px-3 rounded-xl font-inter justify-between items-center'>
                        <div className='font-medium w-1/3'> Data Analyst</div>
                        <div className='cursor-pointer'>• Responsibilities</div>
                        <div className='cursor-pointer'>• Skills</div>
                        <div className='cursor-pointer bg-black rounded-xl text-white py-1 px-2'>Interested</div>
                    </div>
                    <div className='border-[1px] border-gray-400 flex py-2 px-3 rounded-xl font-inter justify-between items-center'>
                        <div className='font-medium w-1/3'> Senior Program Manager</div>
                        <div className='cursor-pointer'>• Responsibilities</div>
                        <div className='cursor-pointer'>• Skills</div>
                        <div className='cursor-pointer bg-black rounded-xl text-white py-1 px-2'>Interested</div>
                    </div>
                    <div className='border-[1px] border-gray-400 flex py-2 px-3 rounded-xl font-inter justify-between items-center'>
                        <div className='font-medium w-1/3'> Data Center Security Manager</div>
                        <div className='cursor-pointer'>• Responsibilities</div>
                        <div className='cursor-pointer'>• Skills</div>
                        <div className='cursor-pointer bg-black rounded-xl text-white py-1 px-2'>Interested</div>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        <div className='flex items-center gap-2 border-2 rounded-lg border-neutral-700 py-2 px-3 justify-center'>Save</div>
                        <div className=' flex font-inter text-sm font-medium gap-4 items-center'>
                            <div className=''> POSTED 1 DAY AGO</div>
                            <div className='flex items-center gap-2 border-2 rounded-lg border-neutral-700 p-2 justify-center'>
                                <img src={Report} alt="Report" className='w-3' />
                                <div>REPORT</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-gray-100 p-6 rounded-md gap-4 flex flex-col'>
                    <div className='flex justify-between w-full relative'>
                        <div className='flex gap-2'>
                            <div className='w-20 rounded-xl'><img src={Google} alt="Logo" className='w-full' /></div>
                            <div className='flex flex-col font-inter pt-1 gap-[2px]'>
                                <div className='font-semibold text-lg'>Google</div>
                                <div className='text-sm font-medium'>Google is a tech giant known for its search engine, ads, cloud services, and AI innovations.</div>
                                <div className='text-sm font-medium'>Team Size - 10/15</div>
                            </div>
                        </div>
                    </div>
                    {/* <div>To write tags </div> */}
                    <div className='border-[1px] border-gray-400 flex py-2 px-3 rounded-xl font-inter justify-between items-center'>
                        <div className='font-medium w-1/3'> Senior Software Engineer</div>
                        <div className='cursor-pointer'>• Responsibilities</div>
                        <div className='cursor-pointer'>• Skills</div>
                        <div className='cursor-pointer bg-black rounded-xl text-white py-1 px-2'>Interested</div>
                    </div>
                    <div className='border-[1px] border-gray-400 flex py-2 px-3 rounded-xl font-inter justify-between items-center'>
                        <div className='font-medium w-1/3'> Strategy and Operations Manager</div>
                        <div className='cursor-pointer'>• Responsibilities</div>
                        <div className='cursor-pointer'>• Skills</div>
                        <div className='cursor-pointer bg-black rounded-xl text-white py-1 px-2'>Interested</div>
                    </div>
                    <div className='border-[1px] border-gray-400 flex py-2 px-3 rounded-xl font-inter justify-between items-center'>
                        <div className='font-medium w-1/3'> Data Analyst</div>
                        <div className='cursor-pointer'>• Responsibilities</div>
                        <div className='cursor-pointer'>• Skills</div>
                        <div className='cursor-pointer bg-black rounded-xl text-white py-1 px-2'>Interested</div>
                    </div>
                    <div className='border-[1px] border-gray-400 flex py-2 px-3 rounded-xl font-inter justify-between items-center'>
                        <div className='font-medium w-1/3'> Senior Program Manager</div>
                        <div className='cursor-pointer'>• Responsibilities</div>
                        <div className='cursor-pointer'>• Skills</div>
                        <div className='cursor-pointer bg-black rounded-xl text-white py-1 px-2'>Interested</div>
                    </div>
                    <div className='border-[1px] border-gray-400 flex py-2 px-3 rounded-xl font-inter justify-between items-center'>
                        <div className='font-medium w-1/3'> Data Center Security Manager</div>
                        <div className='cursor-pointer'>• Responsibilities</div>
                        <div className='cursor-pointer'>• Skills</div>
                        <div className='cursor-pointer bg-black rounded-xl text-white py-1 px-2'>Interested</div>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        <div className='flex items-center gap-2 border-2 rounded-lg border-neutral-700 py-2 px-3 justify-center'>Save</div>
                        <div className=' flex font-inter text-sm font-medium gap-4 items-center'>
                            <div className=''> POSTED 1 DAY AGO</div>
                            <div className='flex items-center gap-2 border-2 rounded-lg border-neutral-700 p-2 justify-center'>
                                <img src={Report} alt="Report" className='w-3' />
                                <div>REPORT</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-gray-100 p-6 rounded-md gap-4 flex flex-col'>
                    <div className='flex justify-between w-full relative'>
                        <div className='flex gap-2'>
                            <div className='w-20 rounded-xl'><img src={Google} alt="Logo" className='w-full' /></div>
                            <div className='flex flex-col font-inter pt-1 gap-[2px]'>
                                <div className='font-semibold text-lg'>Google</div>
                                <div className='text-sm font-medium'>Google is a tech giant known for its search engine, ads, cloud services, and AI innovations.</div>
                                <div className='text-sm font-medium'>Team Size - 10/15</div>
                            </div>
                        </div>
                    </div>
                    {/* <div>To write tags </div> */}
                    <div className='border-[1px] border-gray-400 flex py-2 px-3 rounded-xl font-inter justify-between items-center'>
                        <div className='font-medium w-1/3'> Senior Software Engineer</div>
                        <div className='cursor-pointer'>• Responsibilities</div>
                        <div className='cursor-pointer'>• Skills</div>
                        <div className='cursor-pointer bg-black rounded-xl text-white py-1 px-2'>Interested</div>
                    </div>
                    <div className='border-[1px] border-gray-400 flex py-2 px-3 rounded-xl font-inter justify-between items-center'>
                        <div className='font-medium w-1/3'> Strategy and Operations Manager</div>
                        <div className='cursor-pointer'>• Responsibilities</div>
                        <div className='cursor-pointer'>• Skills</div>
                        <div className='cursor-pointer bg-black rounded-xl text-white py-1 px-2'>Interested</div>
                    </div>
                    <div className='border-[1px] border-gray-400 flex py-2 px-3 rounded-xl font-inter justify-between items-center'>
                        <div className='font-medium w-1/3'> Data Analyst</div>
                        <div className='cursor-pointer'>• Responsibilities</div>
                        <div className='cursor-pointer'>• Skills</div>
                        <div className='cursor-pointer bg-black rounded-xl text-white py-1 px-2'>Interested</div>
                    </div>
                    <div className='border-[1px] border-gray-400 flex py-2 px-3 rounded-xl font-inter justify-between items-center'>
                        <div className='font-medium w-1/3'> Senior Program Manager</div>
                        <div className='cursor-pointer'>• Responsibilities</div>
                        <div className='cursor-pointer'>• Skills</div>
                        <div className='cursor-pointer bg-black rounded-xl text-white py-1 px-2'>Interested</div>
                    </div>
                    <div className='border-[1px] border-gray-400 flex py-2 px-3 rounded-xl font-inter justify-between items-center'>
                        <div className='font-medium w-1/3'> Data Center Security Manager</div>
                        <div className='cursor-pointer'>• Responsibilities</div>
                        <div className='cursor-pointer'>• Skills</div>
                        <div className='cursor-pointer bg-black rounded-xl text-white py-1 px-2'>Interested</div>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        <div className='flex items-center gap-2 border-2 rounded-lg border-neutral-700 py-2 px-3 justify-center'>Save</div>
                        <div className=' flex font-inter text-sm font-medium gap-4 items-center'>
                            <div className=''> POSTED 1 DAY AGO</div>
                            <div className='flex items-center gap-2 border-2 rounded-lg border-neutral-700 p-2 justify-center'>
                                <img src={Report} alt="Report" className='w-3' />
                                <div>REPORT</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-gray-100 p-6 rounded-md gap-4 flex flex-col'>
                    <div className='flex justify-between w-full relative'>
                        <div className='flex gap-2'>
                            <div className='w-20 rounded-xl'><img src={Google} alt="Logo" className='w-full' /></div>
                            <div className='flex flex-col font-inter pt-1 gap-[2px]'>
                                <div className='font-semibold text-lg'>Google</div>
                                <div className='text-sm font-medium'>Google is a tech giant known for its search engine, ads, cloud services, and AI innovations.</div>
                                <div className='text-sm font-medium'>Team Size - 10/15</div>
                            </div>
                        </div>
                    </div>
                    {/* <div>To write tags </div> */}
                    <div className='border-[1px] border-gray-400 flex py-2 px-3 rounded-xl font-inter justify-between items-center'>
                        <div className='font-medium w-1/3'> Senior Software Engineer</div>
                        <div className='cursor-pointer'>• Responsibilities</div>
                        <div className='cursor-pointer'>• Skills</div>
                        <div className='cursor-pointer bg-black rounded-xl text-white py-1 px-2'>Interested</div>
                    </div>
                    <div className='border-[1px] border-gray-400 flex py-2 px-3 rounded-xl font-inter justify-between items-center'>
                        <div className='font-medium w-1/3'> Strategy and Operations Manager</div>
                        <div className='cursor-pointer'>• Responsibilities</div>
                        <div className='cursor-pointer'>• Skills</div>
                        <div className='cursor-pointer bg-black rounded-xl text-white py-1 px-2'>Interested</div>
                    </div>
                    <div className='border-[1px] border-gray-400 flex py-2 px-3 rounded-xl font-inter justify-between items-center'>
                        <div className='font-medium w-1/3'> Data Analyst</div>
                        <div className='cursor-pointer'>• Responsibilities</div>
                        <div className='cursor-pointer'>• Skills</div>
                        <div className='cursor-pointer bg-black rounded-xl text-white py-1 px-2'>Interested</div>
                    </div>
                    <div className='border-[1px] border-gray-400 flex py-2 px-3 rounded-xl font-inter justify-between items-center'>
                        <div className='font-medium w-1/3'> Senior Program Manager</div>
                        <div className='cursor-pointer'>• Responsibilities</div>
                        <div className='cursor-pointer'>• Skills</div>
                        <div className='cursor-pointer bg-black rounded-xl text-white py-1 px-2'>Interested</div>
                    </div>
                    <div className='border-[1px] border-gray-400 flex py-2 px-3 rounded-xl font-inter justify-between items-center'>
                        <div className='font-medium w-1/3'> Data Center Security Manager</div>
                        <div className='cursor-pointer'>• Responsibilities</div>
                        <div className='cursor-pointer'>• Skills</div>
                        <div className='cursor-pointer bg-black rounded-xl text-white py-1 px-2'>Interested</div>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        <div className='flex items-center gap-2 border-2 rounded-lg border-neutral-700 py-2 px-3 justify-center'>Save</div>
                        <div className=' flex font-inter text-sm font-medium gap-4 items-center'>
                            <div className=''> POSTED 1 DAY AGO</div>
                            <div className='flex items-center gap-2 border-2 rounded-lg border-neutral-700 p-2 justify-center'>
                                <img src={Report} alt="Report" className='w-3' />
                                <div>REPORT</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-gray-100 p-6 rounded-md gap-4 flex flex-col'>
                    <div className='flex justify-between w-full relative'>
                        <div className='flex gap-2'>
                            <div className='w-20 rounded-xl'><img src={Google} alt="Logo" className='w-full' /></div>
                            <div className='flex flex-col font-inter pt-1 gap-[2px]'>
                                <div className='font-semibold text-lg'>Google</div>
                                <div className='text-sm font-medium'>Google is a tech giant known for its search engine, ads, cloud services, and AI innovations.</div>
                                <div className='text-sm font-medium'>Team Size - 10/15</div>
                            </div>
                        </div>
                    </div>
                    {/* <div>To write tags </div> */}
                    <div className='border-[1px] border-gray-400 flex py-2 px-3 rounded-xl font-inter justify-between items-center'>
                        <div className='font-medium w-1/3'> Senior Software Engineer</div>
                        <div className='cursor-pointer'>• Responsibilities</div>
                        <div className='cursor-pointer'>• Skills</div>
                        <div className='cursor-pointer bg-black rounded-xl text-white py-1 px-2'>Interested</div>
                    </div>
                    <div className='border-[1px] border-gray-400 flex py-2 px-3 rounded-xl font-inter justify-between items-center'>
                        <div className='font-medium w-1/3'> Strategy and Operations Manager</div>
                        <div className='cursor-pointer'>• Responsibilities</div>
                        <div className='cursor-pointer'>• Skills</div>
                        <div className='cursor-pointer bg-black rounded-xl text-white py-1 px-2'>Interested</div>
                    </div>
                    <div className='border-[1px] border-gray-400 flex py-2 px-3 rounded-xl font-inter justify-between items-center'>
                        <div className='font-medium w-1/3'> Data Analyst</div>
                        <div className='cursor-pointer'>• Responsibilities</div>
                        <div className='cursor-pointer'>• Skills</div>
                        <div className='cursor-pointer bg-black rounded-xl text-white py-1 px-2'>Interested</div>
                    </div>
                    <div className='border-[1px] border-gray-400 flex py-2 px-3 rounded-xl font-inter justify-between items-center'>
                        <div className='font-medium w-1/3'> Senior Program Manager</div>
                        <div className='cursor-pointer'>• Responsibilities</div>
                        <div className='cursor-pointer'>• Skills</div>
                        <div className='cursor-pointer bg-black rounded-xl text-white py-1 px-2'>Interested</div>
                    </div>
                    <div className='border-[1px] border-gray-400 flex py-2 px-3 rounded-xl font-inter justify-between items-center'>
                        <div className='font-medium w-1/3'> Data Center Security Manager</div>
                        <div className='cursor-pointer'>• Responsibilities</div>
                        <div className='cursor-pointer'>• Skills</div>
                        <div className='cursor-pointer bg-black rounded-xl text-white py-1 px-2'>Interested</div>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        <div className='flex items-center gap-2 border-2 rounded-lg border-neutral-700 py-2 px-3 justify-center'>Save</div>
                        <div className=' flex font-inter text-sm font-medium gap-4 items-center'>
                            <div className=''> POSTED 1 DAY AGO</div>
                            <div className='flex items-center gap-2 border-2 rounded-lg border-neutral-700 p-2 justify-center'>
                                <img src={Report} alt="Report" className='w-3' />
                                <div>REPORT</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Role;
