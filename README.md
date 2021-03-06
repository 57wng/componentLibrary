

# 57 Wing Component Library

## QUICK NOTE
### DO NOT WORK ON `MASTER` BRANCH
Please update the in progress chart at the bottom of ReadMe.

##### Branch Naming
`Feature/Bug/Hotfix_NameOfComponent_BranchedFrom_ByDeveloper`
<br/>
`Feature/Radio_Main_FirstNameLastName`

<hr/>

## Table Of Contents
README [text editor](https://stackedit.io)

 1. [Getting Started](#getting-started)
 2. [Data Inputs](#data-inputs)
	1. [Button](#button)
	2. [Input](#input)
	3. [Textarea](#textarea)
	4. [Radio](#radio)
	5. [Slider](#slider)
	6. [Dropdown](#dropdown)
3. [Info Display](#info-display)
    1. [Card](#card)
	2. [Modal](#modal)
	3. [Avatar](#avatar)
	4. [Loading](#loading)
4. [TODO](#todo)

## GETTING STARTED


Install - `npm i 57wng`
<br/>
Import - `import {Componenent} from '57wng/dist';`

### Change Standard SCSS Variables

This will go in your `variables.scss` file.
```
$primary:  #00308f;
$secondary:  #d1af3a;
$success:  #4acc4b;
$warn:  #f3d60e;
$danger:  #c50400;

$white:  #efefef;
$black:  #111111;
$grey-light:  #ccc;
$grey:  #888;
$grey-dark:  #444;
@import  '../node_modules/57wng/src/Style/import.scss';
@import  '../node_modules/57wng/src/Style/variable.scss';
@import  '../node_modules/57wng/src/Style/main.scss';
```

## DATA INPUTS
[top](#table-of-contents)
### Button

PROPS  <br/>
`value` - The text inside the button  <br/>
`color` - color of the button ("primary", "secondary", "success", "warn", "danger") <br/>
`onClick` - Function to be called when the button is clicked.<br/>
`customClass` - adds a custom class to the container of the Button <br/> <br/>

```
import React from 'react';
import { Button } from '57wng/dist';

const Component = () => {

  const buttonTest = () => {
    console.log("Button is working");
  };

  return (
    <div>
      <Button
        value="Button Text"
        color="primary"
        onClick={()  => buttonTest()} 
        customClass="custom-button-class"
      />
    </div>
  )
}

export default Component;
```

<hr/>

### Input

PROPS  <br/>
`value` - The text inside the input that the user enters (this is based on state)  <br/>
`type` - The type of input field you need ex:("text", "email", "number", "password") <br/>
`onChange` - Function to change the state of the value.<br/>
`name` - Takes a string if you are wanting to use formData for state change. <br/>
`placeholder` - Placeholder/ Label for the input<br/>
`required` - Is this a required field or not? Takes a boolean value.<br/>
`customClass` - adds a custom class to the container of the Modal <br/> <br/>

```
import React, { useState } from 'react;
import { Input } from '57wng/dist';

const Component = () => {
  const [text, setText] = useState('');
  
  return (
    <div>
      <Input
        value={text}
        type="text"
        placeholder="Text Placeholder"
        required={true}
        onChange={(event) => setText(event)}
        customClass="custom-input-class"
      />
    </div>
  )
}

export default Component;
```

<hr/>

### Textarea

PROPS  <br/>
`value` - The text inside the input that the user enters (this is based on state)  <br/>
`onChange` - Function to change the state of the value.<br/>
`placeholder` - Placeholder/ Label for the textarea<br/>
`rows` - General height of the textarea<br/>
`required` - Is this a required field or not? Takes a boolean value.<br/>
`customClass` - adds a custom class to the container of the Modal <br/> <br/>

```
import React, { useState } from 'react;
import { Textarea } from '57wng/dist';

const Component = () => {
  const [text, setText] = useState('');
  
  return (
    <div>
      <Textarea
        value={text}
        type="text"
        rows={5}
        placeholder="Text Placeholder"
        required={true}
        onChange={(event) => setText(event)}
        customClass="custom-textarea-class"
      />
    </div>
  )
}

export default Component;
```
[top](#table-of-contents)
### Radio

PROPS  <br/>
`options` - takes an array of Integers or Strings and displays these values as options  <br/>
`name` - sets a title for the radio group to tie the different radio options to a group <br/>
`inline` - Boolean value to force radio to inline. (Defaults to a column view) <br/>
`onChange` - Accepts a state function <br/>
`state` - REQUIRED** changes the state from the onChange prop <br/>
`customClass` - adds a custom class to the container of the Radio <br/> <br/>

```
import React, { useState } from 'react';
import { Radio } from '57wng/dist';

const Component = () => {
  const [state, setState] = useState('');

  return (
    <div>
      <Radio
        customClass="custom-radio-class"
        options={['Option 1',  'Option 2']}
        name={'TEST'}
        inline={true}
        onChange={(event)  => setState(event)}
        state={state}
      />
    </div>
  )
}

export default Component;
```

<hr/>
### Input

PROPS  <br/>
`value` - The text inside the input that the user enters (this is based on state)  <br/>
`onChange` - Function to change the state of the value.<br/>
`label` - Label for the slider<br/>
`min` - Minimum value for slider<br/>
`max` - Maximum value for slider<br/>
`step` - Sets the increment of values in a given slider<br/>
`size` - height of the slider<br/>
`defaultValue` - Sets the default number for a slider<br/>
`required` - Is this a required field or not? Takes a boolean value.<br/>
`customClass` - adds a custom class to the container of the Modal <br/> <br/>

```
import React, { useState } from 'react;
import { Slider } from '57wng/dist';

const Component = () => {
  const [text, setValue] = useState('');
  
  return (
    <div>
      <Slider
        value={text}
        defaultValue={30}
        label="Slider Label"
        required={true}
        size={"md"}
        step={10}
        min={0}
        max={100}
        onChange={(event) => setValue(event)}
        customClass="custom-slider-class"
      />
    </div>
  )
}

export default Component;
```

<hr/>

[top](#table-of-contents)
### Dropdown

PROPS <br/>
`label` - The title of the dropdown that the user enters. <br/>
`value` - This is the parent component's state. <br/>
`setState` - Function to change the state of the value.<br/>
`options` - Array of  available options under the dropdown menu. <br/>
`customClass` - adds a custom class to the container of the Dropdown <br/>  <br/>

```
import React, { useState } from 'react;
import { Dropdown } from '57wng/dist';
  
const Component = () => {
  const [state, setState] = useState('');  
  
    return (
      <div>
        <Dropdown
          label={'text'}
          value={state}
          setState={(event) => setState(event)}
          options={[]}
          customClass="custom-dropdown-class"
        />
      </div>
    )
}

export default Component;

```

<hr/>

## INFO DISPLAY

[top](#table-of-contents)
### Card

PROPS <br/>
`color` - passing the string "dark" will make it have a dark background with light text. <br/>
`elevation` - Enter a number 1 - 5. The higher the number the more it appears to hover. <br/>
`hover` - Boolean. If this is true then the card will appear to elevate when you hover over it.<br/>
`customClass` - adds a custom class to the container of the Card <br/>  <br/>

```
import React from 'react;
import { Card } from '57wng/dist';
  
const Component = () => {
  
    return (
      <div>
        <Card
          color="dark"
          elevation={3}
          hover={true}
          customClass="custom-dropdown-class"
        />
      </div>
    )
}

export default Component;

```

<hr/>

[top](#table-of-contents)

### Modal
PROPS  <br/>
`value` - The text inside the button that opens the modal  <br/>
`customClass` - adds a custom class to the container of the Modal <br/> <br/>

```
import React from 'react';
import { Modal } from '57wng/dist';

const Component = () => {
  return (
    <div>
      <Modal value="Open Modal" customClass="custom-modal-class">
        <h1>Modal Title</h1>
        <p>Some Content for the Modal</p>
      </Modal
    </div>
  )
}

export default Component;
```

<hr/>

### Avatar

PROPS <br/>
`size` - changes the size of the avatar image <br/>
`image` - url pointing to an image file <br/>
`customClass` - adds a class to the avatar component container  <br/> <br/>

| Size | size |
|--|--|
| "lg" | 200px |
| "md" | 100px |
| "sm" | 50px |

```
import React from 'react';
import { Avatar } from '57wng/dist';

const Component = () => {
  return (
    <div>
      <Avatar size="md" image="image.jpg" customClass="custom-avatar-class"/>
    </div>
  )
}

export default Component;
```

<hr/>

### Loading

PROPS <br/>
`customClass` - adds a custom class to loading container.  <br/> <br/>

The loading component does not take any customization props. The external spinning circle is the `$secondary` color and the inner spinning circle is the `$primary` color. <br/> <br/>

To customize the circles color add a `customClass` prop and then select `.external-circle` and `.internal-circle`. to change the color use `stroke: $color;` <br/> <br/>

```
import React from 'react';
import { Loading } from '57wng/dist';

const Component = () => {
  return (
    <div>
      <Loading customClass="custom-loading-class"/>
    </div>
  )
}

export default Component;
```

## TODO 

### WHEN EDITING THE TODO LIST PLEASE EDIT README DIRECTLY IN GITHUB.`

### HIGH PRIORITY

#### DO NOT DELETE FROM LIST UNTIL DOCUMENTATION AND TESTING IS COMPLETE

if it is currently in progress please put a link to the working branch in the `in progress` column and your name in the `by` column.

| tags | in progress | by | example |
|--|--|--|--|
| Badge |  |  | [here](https://mui.com/components/badges/) |
| Chip |  |  | [here](https://mui.com/components/chips/) |   
| A |[branch](https://github.com/crisboxing11/componentLibrary/tree/Anchor_Main_Arroyo) | Cristian A.  | [here](https://mui.com/components/links/) |

if it is currently in progress please put a link to the working branch in the `in progress` column and your name in the `by` column.

| components | in progress | by | example |
|--|--|--|--|
| Alert |[branch](https://github.com/57wng/componentLibrary/tree/Feature/Alert_Main_PLove)  | Perri L. | [here](https://mui.com/components/alert/) |
| Accordion |  |  | [here](https://mui.com/components/accordion/) |
| Nav | [branch](https://github.com/57wng/componentLibrary/tree/Feature/Nav_Main_EMcPheron) | Evan Mc. | [here](https://material.io/components/navigation-drawer#anatomy) |

<hr/>

### LOW PRIORITY

#### DO NOT DELETE FROM LIST UNTIL DOCUMENTATION AND TESTING IS COMPLETE

if it is currently in progress please put a link to the working branch in the `in progress` column and your name in the `by` column.

| tags | in progress | by | example |
|--|--|--|--|
| Tooltip |  |  | [here](https://mui.com/components/tooltips/) |
| Notification |  |  | [here](https://mui.com/components/snackbars/) |
| Paper |  |  | [here](https://mui.com/components/paper/) |

if it is currently in progress please put a link to the working branch in the `in progress` column and your name in the `by` column.

| components | in progress | by | example |
|--|--|--|--|
| Table |  |  | [here](https://mui.com/components/tables/) |
| Toggle |  |  | [here](https://mui.com/components/toggle-button/) |
| GhostLoader |  |  | [here](https://mui.com/components/skeleton/) |
| Graph |  |  | [here](https://material.io/design/communication/data-visualization.html#types) |

[top](#table-of-contents)
