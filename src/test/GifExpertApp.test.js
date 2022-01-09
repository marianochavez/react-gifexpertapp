import React from 'react';
import {shallow} from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';


describe('Test <GifExpertApp/>', () => {

    // const setCategory = jest.fn();
    
    test('should show <GifExpertApp/> correctly', () => {
        
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should show a list of categories', () => {
        
        const categories = ['One Punch', 'Samurai X'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
})
