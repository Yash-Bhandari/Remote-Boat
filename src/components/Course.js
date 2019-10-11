import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const Course = ({ course }) => {
    return (
        <div>
            {course ? (
                <Card>
                    <CardMedia style={{height:0, paddingTop: '56.25%'}}
                    image={'https://freedesignfile.com/upload/2017/08/Woman-wearing-a-trench-coat-with-sunglasses-Stock-Photo.jpg'}
                    title={course}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component='h2'>
                            {course}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small' color='primary' href='https://google.com' target='_blank'>
                            Go Nibba!
                        </Button>
                    </CardActions>
                </Card>
            ) : null}
        </div>
    )
}

export default Course;
