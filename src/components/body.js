import React,{Component} from 'react';

class Body extends React.Component{
    render(){
        return(
            <div>
            <section className="content">    
                       <article>
                                <h1><b>EASY MANAGEMENT</b></h1>
                                <h3>EASY TO USE</h3>
                                <p>
                                Far far away, behind the word mountains, far from the countries <br/>Vokalia and Consonantia, there live <br/>the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large <br/>language ocean.
                                </p>
                                <button>Download</button>
                        </article>
                        <article>        
                                <img src="./images/mobile.png" alt="mobile"/>
                        </article>
                </section>
                <article className="listItems">
                        <p id="first">What We Do?</p>
                        <p id="second">Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque dapibus in purus in dignissim.</p>
                        <hr/>
                        <section className="flex-container">
                                <figure>
                                        <img className="service" src="./images/Service1.png"/>
                                        <figcaption><h3>Modern Design</h3></figcaption>
                                        <figcaption className="para">We Create Modern And Clean Theme For Your Business Company.</figcaption>
                                </figure>
                                <figure>
                                        <img className="service" src="./images/Service2.png"/>
                                        <figcaption><h3>Powerfull Theme</h3></figcaption>
                                        <figcaption className="para">We Create Modern And Powerful Theme With Lots Animation And Features</figcaption>
                                </figure>
                                  
                                <figure>
                                        <img className="service" src="./images/Service3.png"/>
                                        <figcaption><h3>Clean Code</h3></figcaption>
                                        <figcaption className="para">We Create Modern And Powerful Html5 And CSS3 Code Easy For Read And Customize.</figcaption>
                                </figure>
                        </section>
                </article>
               </div>
        );
    }
}
export default Body;