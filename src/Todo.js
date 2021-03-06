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
                    < Typography variant="h4" component="h2" >
                        Descripción : {this.props.res.text}
                    </Typography >
                    < Typography   >
                        {this.props.res.status} - {this.props.res.dueDate.toString()}
                    </Typography >
                    <Typography  color="textPrimary" gutterBottom>
                        Autor: {localStorage.getItem("mailLogged")}
                    </Typography >
                </CardContent>
            </Card>

        );
    }


}