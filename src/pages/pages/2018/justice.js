import React from "react";
import Helmet from "react-helmet";
import Navbar from '../../../components/Navbar';

export default class Justice2018Page extends React.Component {
  render() {

    return (
      <div>
        <Navbar />
        <section class="section is-outer-section">
          <Helmet title="Slave Free Groceries" />
          <span class="container">
            <div class="columns">
              <div class="column is-10 is-offset-1">
                <div class="content">
                  <h1 class="has-text-weight-bold is-size-2">
                    Slave Free Groceries
                  </h1>
                </div>
                <div class="card column is-9 is-offset-1">
                  <div class="card-content">
                    <div class="title is-size-4">
                      “the dominant things we buy that are 
                      likely to have been produced by slave labour are 
                      computers and mobile phones, clothing, fish, cocoa
                      and sugar.”
                    </div>
                    <div class="subtitle is-size-6 has-text-right">
                      <a href="https://www.globalslaveryindex.org/2018/findings/highlights/">Global Slavery Index 2018</a> (<a href="https://www.globalslaveryindex.org/resources/downloads/">pdf p. iv</a>)
                    </div>
                  </div>
                </div>
                
                <div class="section content">
                  <h2>Fish</h2>
                  <ul>
                    <li>No certification at consumer level</li>
                    <li><a href="https://blog.puriri.nz/2018/05/buying-fish-for-human-rights-salmon.html">Buying fish for human rights: salmon</a></li>
                    <li><a href="https://blog.puriri.nz/2018/07/buying-fish-for-human-rights-tinned.html">Buying fish for human rights: tinned tuna, sardines and mackerel</a></li>
                    <li><a href="https://blog.puriri.nz/2018/09/buying-fish-for-human-rights-pet-food.html">Buying fish for human rights: pet food</a></li>
                    <li></li>
                  </ul>

                  <h2>Cocoa</h2>
                  <ul>
                    <li>Certifications:  UTZ, Fair Trade (2 variants)</li>
                    <li><a href="https://blog.puriri.nz/2017/02/how-to-choose-ethical-chocolate.html">How to buy chocolate without supporting abuse of cocoa growers</a></li>
                    <li><a href="https://blog.puriri.nz/2016/06/fairly-traded-cocoa-products-in-new.html">Fairly traded cocoa products in New Zealand</a></li>
                    <li><a href="https://blog.puriri.nz/2016/02/utz-certification.html">UTZ certification</a></li>
                    <li></li>
                  </ul>

                  <h2>Sugar</h2>
                  <ul>
                    <li>Certification: Bon Sucro</li>
                    <li><a href="https://blog.puriri.nz/2018/07/slave-free-sugar.html">Slave free sugar</a></li>
                    <li></li>
                  </ul>
                </div>

              </div>
            </div>
          </span>
        </section>
      </div>
    );
  }
}
