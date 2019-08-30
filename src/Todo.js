import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
export class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Card>
                <CardContent>
                    < Typography variant="h3" component="h2" >
                        text : {this.props.res.text}
                    </Typography >
                    < Typography variant="h5" component="h2" >
                        priority : {this.props.res.priority}
                    </Typography >
                    <Typography  color="textPrimary" gutterBottom>
                        due date: {this.props.res.dueDate.toString()}
                    </Typography >
                </CardContent>
            </Card>

        );
    }


}