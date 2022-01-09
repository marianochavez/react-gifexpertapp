import React from 'react';
import {shallow} from "enzyme";
import {GifGridItem} from "../../components/GifGridItem";


describe("Test GifGridItem", () => {

    const title = "test title";
    const url = "https://asd.com";
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);
    
    
    test('should show GifGridItem correctly', () => {

        expect(wrapper).toMatchSnapshot();
    })
    
    test('should have a paragraph with title', () => {
        
        const p = wrapper.find("p");
        expect(p.text().trim()).toBe(title);
    })
    
    test('should have a img with url', () => {

        const img = wrapper.find("img");
        // console.log(img.html());
        expect(img.prop("src")).toBe(url);
        expect(img.prop("alt")).toBe(title);
    })

    test('should have animate__fadeIn', () => {
        
        const div = wrapper.find("div");
        expect(div.hasClass("animate__fadeIn")).toBe(true);
    })
    


});