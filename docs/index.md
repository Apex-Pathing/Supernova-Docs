---
layout: home

hero:
  name: "Apex"
  text: "Pathing"
  actions:
    - theme: brand
      text: Get Started
      link: /about
  # image:
  #   src: /images/apex_logo.png
  #   alt: ApexPathing Logo
---

<div id="content-holder-long" class="body-style">
<h1> Why you should choose Apex Pathing </h1>
  <div id="flex-box-grid" data-role="flex-hoverable" class="body-style">
    <div>
      <img src="/images/apex_logo.png" width="50" height="20" alt="ApexPathing Logo">
      <h1>Quintic Hermetic Splines</h1>
      <h3>We use Quintic Hermetic Splines to do yada yada</h3>
    </div>
    <div>
        <h1>This is an example</h1>
        <h3>This is an example</h3>
    </div>    
    <div>
        <h1>This is an example</h1>
        <h3>This is an example</h3>
    </div>    
    <div>
        <h1>This is an example</h1>
        <h3>This is an example</h3>
    </div>    
    <div>
        <h1>This is an example</h1>
        <h3>This is an example</h3>
    </div>    
    <div>
        <h1>This is an example</h1>
        <h3>This is an example</h3>
    </div>    
  </div>
</div>

<div id="content-holder-long" class="body-style">
  <h1>Welcome to Apex Pathing</h1> 
  <p>Insert information here</p>
</div>

<div id="content-holder-long" class="body-style">
  <h1>Quintic Spline Based Pathing</h1> 
  <p>We use Quintic Splins to do [INFORMATION]</p>
</div>

<div id="content-holder-long" class="idk-container">
  <div id="flex-box-grid" class="idk-container">
    <div id="left-side">
      <div id="contain">
        <h1> Left </h1>
      </div>
    </div>
    <div id="right-side">
      <div id="contain">
        <h1> Right </h1>
      </div>
    </div>
  </div>
</div>


<div id="content-holder-long" class="body-style">
  <h1>Welcome to Apex Pathing</h1> 
  <p>Insert information here</p>
</div>

<div id="content-holder-long" class="information-container">
  <h1>Documentation</h1> 
  <p>Insert information here</p>
</div>
<div id="content-holder-long" class="idk-container">
  <div id="flex-box-grid" class="idk-container">
    <div id="right-side">
      <div id="contain">
        <h1 style="text-align: center"> Documentation Information </h1>
      </div>
    </div>
  </div>
</div>


<style>
   #flex-box-grid {
    display: grid;
    grid-template-columns: auto auto auto;
    background-color: dimgray;
    padding: 5px;
    gap: 10px;
    column-gap: 10px;
    height: 25vw;
    max-height: 500px;
    width: min-width;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   }

  #flex-box-grid[data-role="flex-hoverable"] {
    height: 100%;
  }
  #flex-box-grid[data-role="flex-hoverable"] div {
      transition: all .1s ease-in-out;
  }
  #flex-box-grid[data-role="flex-hoverable"] div:not(:hover) {
      transition: all .3s ease-in-out;
  }
  #flex-box-grid[data-role="flex-hoverable"] div:nth-of-type(odd):hover {
     transform: rotate(2.5deg);
      background-color: black;
  }
  #flex-box-grid[data-role="flex-hoverable"] div:nth-of-type(even):hover {
      transform: rotate(-2.5deg);
      background-color: black;
  }
   

   #content-holder-long {
      padding: 20px; 
      background-color: #333; 
      color: white;
      border-radius: 8px;
      margin-top: 20px;
   }

  #content-holder-split {
      padding: 20px; 
      background-color: #333; 
      color: white;
      border-radius: 8px;
      margin-top: 20px;
   }
</style>