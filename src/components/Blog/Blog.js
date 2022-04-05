import React from "react";

function Blog() {
  return (
    <div className="container">
      <h1 className="m-5">Simple Questions </h1>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Q1. What is ContextApi ?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Context Api is a React hook. It is use for prevent use props
              drilling .It gives the power to use a state in child components
              without passing props.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Q2. What is Symantic Tag ?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Symantic tag is clearly description for both browser and dev . For
              exemple
              {
                "<nav></nav> , <article> </article> , <address></address> ,<section > </section> etc ."
              }{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
