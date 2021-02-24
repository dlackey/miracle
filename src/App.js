import React from 'react';
import {
  Card,
  CardContent,
  Typography,
 } from '@material-ui/core';

function App() {
  return (
    <React.Fragment>
      <Saver header='Silence'>
        You sit, very calm, very peaceful, and you breathe deeply, slowly. As you sit in silence, you’re totally present in the now, in the moment. You calm your mind, relax your body, and allow all of your stress to melt away. You develop a deeper sense of peace, purpose, and direction.
      </Saver>
      <Saver header='Affirmations'>
        You pull out your daily Affirmations—the ones that remind you of your unlimited potential and your most important priorities—and you read them out loud from top to bottom.
        * Lease Falconhead
        * Buy NNN
      </Saver>
      <Saver header='Visualization'>
        You visualize the day going perfectly, see yourself enjoying your work, smiling and laughing with your family, or your significant other, and easily accomplishing all that you intend to accomplish for that day.
      </Saver>
      <Saver header='Reading'>
        10 Pages, Picture
      </Saver>
      <Saver header='Scribing'>
        What’s the ONE Thing I can do today such that by doing it everything else will be easier or unnecessary? You take a minute to write down what you’re grateful for, what you’re proud of, and the results you’re committed to creating for that day. Doing so, you put yourself in an empowered, an inspired, and confident state of mind.
      </Saver>
      <Saver header='Exercise'>
        Jumping Jacks
      </Saver>
    </React.Fragment>
  );
}

function Saver({ header, children }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          {header}
        </Typography>
        <Typography color="textSecondary">
          {children}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default App;
