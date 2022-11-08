import React from 'react'

function Footer() {
  return (
    <div>
      <footer className='container my-5 px-4 px-md-0'>
                <hr />
                <div className="row">
                    <div className="col-12 col-md-6">
                        <p>Created by Soubhik Ghosh</p>
                    </div>
                    <div className="col col-md-auto icons ms-auto">
                    <a href="https://www.facebook.com/profile.php?id=100006403426982" target="blank"><iconify-icon icon="akar-icons:facebook-fill" style={{color:"#59319d", fontSize:"24px", marginRight:"12px"}}></iconify-icon></a>
                    <a href="https://www.instagram.com/itzsvk" target="blank"><iconify-icon icon="akar-icons:instagram-fill"style={{color:"#59319d", fontSize:"24px", marginRight:"12px"}}></iconify-icon></a>
                    <a href="https://wa.me/+918240703010"><iconify-icon icon="akar-icons:whatsapp-fill" style={{color:"#59319d", fontSize:"24px", marginRight:"12px"}}></iconify-icon></a>
                    </div>
                </div>
            </footer>
    </div>
  )
}

export default Footer
