import JogathonImg from '../assets/jogathon2023.jpg'
import '../styles/jogathon.css'

import React from 'react'

const Jogathon = () => {
  return (
    <div className='jogathon page-content'>

        <h2>Jog-a-Thon</h2>

        <div className='info-block'>
            <p>We have officially kicked off the Jog-a-thon fundraising, and are ready to get going on pledges! You can have your kids send out emails, texts, and personalized videos to family and friends. Another great way is to post on social media with links. </p>

            <a href="https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fkardiaclassical.us17.list-manage.com%2Ftrack%2Fclick%3Fu%3D980df44bcdbf41a0edc7951a0%26id%3D77902cdde9%26e%3De40b4ac233&data=05%7C01%7C%7C27d8db8cab514cfdb21608dbbbbf9540%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638310203759978940%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=9tvOtc7LxFIZFQwhUdDfP8Ymiae%2FDWJhQJm6zRHqVBM%3D&reserved=0" target='_blank'><div>JOG-A-THON PLEDGES</div></a>

            <img src={JogathonImg} className='col-12 col-lg-8' alt="" />
            <p>We are doing the majority of the fundraiser online again this year as it streamlines the process and really makes it easy for everyone to collect without having to feel like you are hounding anyone. Click <a href='https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fkardiaclassical.us17.list-manage.com%2Ftrack%2Fclick%3Fu%3D980df44bcdbf41a0edc7951a0%26id%3D77902cdde9%26e%3De40b4ac233&data=05%7C01%7C%7C27d8db8cab514cfdb21608dbbbbf9540%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638310203759978940%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=9tvOtc7LxFIZFQwhUdDfP8Ymiae%2FDWJhQJm6zRHqVBM%3D&reserved=0' target="_blank" >HERE</a> to see the website and get started on gathering pledges. </p>
        </div>
    </div>
  )
}

export default Jogathon