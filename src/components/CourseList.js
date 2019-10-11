import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful';
import Course from '../components/Course';

const SPACE_ID = '';
const ACCES_TOKEN = '';

const CourseList = () => {
    let [courses, setCourses] = useState(['abc', 'def', 'ghi', 'jkl']);
    let [searchString, setSearchString] = useState('');

    const onSearchInputChange = (event) => {
        if (event.target.value) {
            setSearchString(event.target.value)
        } else {
            setSearchString(event.target.value)
        }
    }

    return (
        <div>
            {courses ? (
                <div>
                    <TextField style={{padding: 24}}
                        id='searchinput'
                        placeholder='Search for Courses'
                        margin='normal'
                        onChange={onSearchInputChange}/>
                    <Grid container spacing={24} style={{padding: 24}}>
                        {courses.map(course => (
                            <Grid item xs={12} sm={6} lg={4} xl={3}>
                                <Course course={course}/>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            ): "No courses found"};
        </div>
    )
}

export default CourseList;