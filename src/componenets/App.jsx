import React,{ useState }  from "react";
import ReactDOM from "react-dom";
import TopNav from "./TopNav";
// import companyLogo from '../../public/assets/images/logo.svg';
function handleChange(){
       document.querySelector("ul").classList.add("hi");

}


function App(){
    return <div className="main">
              <TopNav/>
               <div className="grid-container">
                    <div className=" grid-item item1"> 
                    <img className="item1-img"src="../assets/images/image-web-3-desktop.jpg" alt="Top leftmost image"/> 
                    <img className="item1-img2" src="../assets/images/image-web-3-mobile.jpg" alt="Top leftmost image"/>
                    </div>
                    <div className=" grid-item item2">
                        <h1 className="new">New</h1>
                        <h4>Hydrogen VS Electric Cars</h4>
                        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                        <hr/>
                        <h4>The Downsides of AI Artistry</h4>
                        <p>What are the possible adverse effects of on-demand AI image generation?</p>
                        <hr/>
                        <h4>Is VC Funding Drying Up?</h4>
                        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                         

                    </div>
                    <div className=" grid-item item3">
                     <h1>The Bright Future of Web 3.0?</h1>
                    
                     </div>
                    <div className=" grid-item item4">
                         <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                         <button type="button">READ  MORE</button>
                    </div>

                    <div className=" grid-item item5">
                    <div className="flex-container">
                       <div className="first card">
                        <img className="hello-image" src="../assets/images/image-retro-pcs.jpg" alt="para-images"/>  
                       </div>
                       <div className="second card">
                         <h1>01</h1>
                         <h4>Reviving Retro PCs</h4>
                         <p>What happens when old PCs are given modern upgrades?</p>
                       </div>
                    
                    </div>
                    </div>
                    


                    <div className=" grid-item item6">
                    <div className="flex-container">
                             <div className="first card">
                             <img className="hello-image" src="../assets/images/image-top-laptops.jpg" alt="para-images"/>  
                             </div>
                              <div className="second card">
                                <h1>02</h1>
                                <h4>Top 10 Laptops of 2022</h4>
                                 <p>Our best picks for various needs and budgets.</p>
                               </div>
                    
                    </div>
                    </div>
                  
                    <div className=" grid-item item7">
                    <div className="flex-container">
                             <div className="first card">
                             <img className="hello-image" src="../assets/images/image-gaming-growth.jpg" alt="para-images"/>  
                             </div>
                              <div className="second card">
                                <h1>03</h1>
                                <h4>The Growth of Gaming</h4>
                                 <p>How the pandemic has sparked fresh opportunities.</p>
                               </div>
                    
                    </div>
                    </div>

                   


                   
                     
               </div>
          </div>
    
    
}




export default App;









{/* <div class="flex-container">
               <div class="card">
               <img src="../assets/images/logo.svg" alt="logo-image"/>
               </div>
               <div class="card">
                    <ul className="list-container">
                       <li ><a>Home</a></li>
                       <li><a>New</a></li>
                       <li><a>Popular</a></li>
                       <li><a>Trending</a></li>
                       <li><a>Categories</a></li>
                    </ul>
               </div>
 </div> */}
