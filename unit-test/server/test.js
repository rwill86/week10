     const express = require('express');
	 var assert = require('assert');
	 const app = express();
	 const helpers = require('./linearPoint.js');
	 
	 describe('Alway true test', function(){
		 it('should always equal true 1 = 1', function(){
			 assert.equal(1, 1);
		 });
	 });
	 
	 describe('Test addnum function', function(){
		 it('2 * 1 + 4 should be 6', function(){
			 assert.equal(helpers.addnum(2,1,4).result, 6);
		 });
	 });
	 
	  describe('Test addnum function', function(){
		 it('2 * 0 + 4 should be 4', function(){
			 assert.equal(helpers.addnum(2,0,4).result, 4);
		 });
	 });
	 
	 describe('Test addnum function', function(){
		 it('2 * -1 + 4 should be 2', function(){
			 assert.equal(helpers.addnum(2,-1,4).result, 2);
		 });
	 });
     
	 describe('Test addnum function - Missing data param 1', function(){
		 it('_ + 5 should have one error message', function(){
			 assert.equal(helpers.addnum(null,5,10).errors.length, 1);
		 });
		 
		 it('Error Message is - Number 1 is not a number', function(){
			 assert.equal(helpers.addnum(null,4,10).errors[0], 'Number 1 is not a number.');
		 });
	 });
	 
	 describe('Test addnum function - Missing data param 2', function(){
		 it('5 + _ should have one error message', function(){
			 assert.equal(helpers.addnum(5,null,10).errors.length, 1);
		 });
		 
		 it('Error Message is - Number 2 is not a number', function(){
			 assert.equal(helpers.addnum(5,null,10).errors[0], 'Number 2 is not a number.');
		 });
	 });
	 
	 describe('Test addnum function - Missing all Params', function(){
		 it('_ + _ should have two error message', function(){
			 assert.equal(helpers.addnum(null,null,null).errors.length, 3);
		 });
	 });
	 
	 describe('Test addnum function - Param is string', function(){
		 it('5 + "abc" should have one error message', function(){
			 assert.equal(helpers.addnum(5,'abc',10).errors.length, 1);
		 });
	 });