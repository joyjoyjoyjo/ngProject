import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('测试食谱内容','这是食谱内容的详细介绍','http://placehold.it/125x50/8B008B'),
    new Recipe('测试食谱内容','这是食谱内容的详细介绍','http://placehold.it/125x50/9370DB'),
    new Recipe('测试食谱内容','这是食谱内容的详细介绍','http://placehold.it/125x50/7B68EE'),
    new Recipe('测试食谱内容','这是食谱内容的详细介绍','http://placehold.it/125x50/00BFFF'),
    new Recipe('测试食谱内容','这是食谱内容的详细介绍','http://placehold.it/125x50/7FFFAA'),
    new Recipe('测试食谱内容','这是食谱内容的详细介绍','http://placehold.it/125x50/2E8B57')
  ]
  constructor() { }

  ngOnInit() {
  }

}
