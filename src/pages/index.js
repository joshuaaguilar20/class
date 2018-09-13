import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Tonight is about the problem solving process</h1>
    <p> Here are the Links to the Algorithms </p>
    <p> 1) The Problem Solving Approach
    <br/>
     Understand the Problem
    <br/>
    Explore Concrete Examples
    <br/>
    Break It Down
    <br/>
    Solve/Simplify
    <br/>
    Look Back and Refactor
    <br/>
    
    Interview Question of the Week
    <br/>
    <h3>What are Divide and Conquer algorithms?</h3><br/>
    
    Describe how they work. Can you give any common examples of the types of problems where this approach might be used?<br/>
    Divide and Conquer algorithms are a paradigm for solving problems that involve several basic steps. First, we divide the problem into smaller pieces and work to solve each of them independently. Once we’ve solved all of the pieces, we take all of the resulting smaller solutions and combine them into a single integrated comprehensive solution.
    This process can be performed recursively; that is, each “sub problem” can itself be subdivided into even smaller parts if necessary.. This recursive division of the problem is performed until each individual problem is small enough to become relatively trivial to solve.
    Some common examples of problems that lend themselves well to this approach are binary search, sorting algorithms (e.g., Merge Sort, Quicksort), optimization of computationally complex mathematical operations (Exponentiation, FFT, Strassen’s algorithm), and others.
    </p>
    
    <br/>
    <Link to="/page-2/">Problems on Page Two</Link>
  </div>
)

export default IndexPage
