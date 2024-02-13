import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.calculateTotalPages();
    this.updateVisibleRecords();
  }
  itemsPerPage = 6; // Number of items per page
  currentPage = 1; // Current page
  totalPages: number=0;
  visibleRecords: any[] = [];

images=[{blogtitle:"blog title",blogDescription:" This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",blogMainDescription:"",image:"https://weaversdirect.in/cdn/shop/articles/7_Handloom_Saree_Trends_to_Follow_In_2024.png?v=1707301042&width=1000"},
{blogtitle:"blog title",blogDescription:" This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",blogMainDescription:"",image:"https://weaversdirect.in/cdn/shop/articles/7_Handloom_Saree_Trends_to_Follow_In_2024.png?v=1707301042&width=1000"},
{blogtitle:"blog title",blogDescription:" This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",blogMainDescription:"",image:"https://weaversdirect.in/cdn/shop/articles/7_Handloom_Saree_Trends_to_Follow_In_2024.png?v=1707301042&width=1000"},
{blogtitle:"blog title",blogDescription:" This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",blogMainDescription:"",image:"https://weaversdirect.in/cdn/shop/articles/7_Handloom_Saree_Trends_to_Follow_In_2024.png?v=1707301042&width=1000"},
{blogtitle:"blog title",blogDescription:" This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",blogMainDescription:"",image:"https://weaversdirect.in/cdn/shop/articles/7_Handloom_Saree_Trends_to_Follow_In_2024.png?v=1707301042&width=1000"},
{blogtitle:"blog title",blogDescription:" This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",blogMainDescription:"",image:"https://weaversdirect.in/cdn/shop/articles/7_Handloom_Saree_Trends_to_Follow_In_2024.png?v=1707301042&width=1000"},
{blogtitle:"blog title",blogDescription:" This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",blogMainDescription:"",image:"https://weaversdirect.in/cdn/shop/articles/7_Handloom_Saree_Trends_to_Follow_In_2024.png?v=1707301042&width=1000"},
{blogtitle:"blog title",blogDescription:" This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",blogMainDescription:"",image:"https://weaversdirect.in/cdn/shop/articles/7_Handloom_Saree_Trends_to_Follow_In_2024.png?v=1707301042&width=1000"},
{blogtitle:"blog title",blogDescription:" This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",blogMainDescription:"",image:"https://weaversdirect.in/cdn/shop/articles/7_Handloom_Saree_Trends_to_Follow_In_2024.png?v=1707301042&width=1000"},
{blogtitle:"blog title",blogDescription:" This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",blogMainDescription:"",image:"https://weaversdirect.in/cdn/shop/articles/7_Handloom_Saree_Trends_to_Follow_In_2024.png?v=1707301042&width=1000"},
{blogtitle:"blog title",blogDescription:" This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",blogMainDescription:"",image:"https://weaversdirect.in/cdn/shop/articles/7_Handloom_Saree_Trends_to_Follow_In_2024.png?v=1707301042&width=1000"},
{blogtitle:"blog title",blogDescription:" This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",blogMainDescription:"",image:"https://weaversdirect.in/cdn/shop/articles/7_Handloom_Saree_Trends_to_Follow_In_2024.png?v=1707301042&width=1000"}]

logMessage(message: any) {
  console.log(message);
}
calculateTotalPages() {
  this.totalPages = Math.ceil(this.images.length / this.itemsPerPage);
}
prevPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
    this.updateVisibleRecords();
  }
}
nextPage() {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
    this.updateVisibleRecords();
  }
}

updateVisibleRecords() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  this.visibleRecords = this.images.slice(startIndex, endIndex);
}
//img="https://weaversdirect.in/cdn/shop/articles/7_Handloom_Saree_Trends_to_Follow_In_2024.png?v=1707301042&width=1500";
}