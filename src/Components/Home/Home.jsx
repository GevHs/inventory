import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './Home.css'


function Home({ list }) {
    return (
        <React.Fragment>
            <div className='home-blog'>
                <div className='border rounded mt-3 col-6 p-3'>
                    <h2 className='inv_title pt-5'>Inventory System</h2>
                    <p className='inv_subTitle pb-5'>
                        This is a modified jumpbotron that  occupies the entrie  <br />
                        horizontal space of its parent.
                    </p>
                </div>
                <div className='border w-25  bg-danger rounded-circle'></div>
                <div style={{ marginTop: '20px' }}>
                    {list.map((item, index) => {
                        return <p className='textColorBlog' key={index}>{item}</p>
                    })}
                </div>
            </div>
            <div className='gallery'>
                <div className='border col-3 rounded'>
                <div className='imageBlok'>
                    <img  src='https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-577674005_492115_zfpgiw.jpg' alt='Game' />
                </div>
                    <p>Books</p>
                </div>
                <div className='border col-3 rounded'>
                    <div className='imageBlok'>
                    <img  src='https://cdn.mos.cms.futurecdn.net/2aXLfQmG5nbSiwkngZJh6e.jpg'  alt='Games'/>
                    </div>
                    <p>Games</p>
                    
                </div>
                <div className='border col-3 rounded'>
                    <div className='imageBlok'>
                    <img  src='https://www.incimages.com/uploaded_files/image/1920x1080/getty_875268918_404615.jpg' alt='Gifts'/>
                    <p>Gifts</p>
                    </div>
                    
                </div>
                <div className='border col-3 rounded'>
                   <div className='imageBlok'>
                    <img src='https://img.freepik.com/free-vector/building-material-heaps-set_74855-938.jpg?w=2000' alt='Materials'/>
                    </div> 
                    <p>Materials</p> 
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home