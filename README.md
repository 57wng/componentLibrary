

# 57 Wing Component Library

## QUICK NOTE
### DO NOT WORK ON `MASTER` BRANCH

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
3. [Info Display](#info-display)
	1. [Modal](#modal)
	2. [Avatar](#avatar)
	3. [Loading](#loading)

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

export default Button;
```

<hr/>

### Input

PROPS  <br/>
`value` - The text inside the input that the user enters (this is based on state)  <br/>
`type` - The type of input field you need ex:("text", "email", "number", "password") <br/>
`onChange` - Function to change the state of the value.<br/>
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
`options` - takes and array of Integers or Strings and displays these values as options  <br/>
`name` - sets a title for the radio group to tie the different radio options to a group <br/>
`inline` - Boolean value to force radio to inline. (Defaults to a column view) <br/>
`onChange` - Accepts a state function <br/>
`state` - REQUIRED** changes the state from the onChange prop <br/>
`customClass` - adds a custom class to the container of the Button <br/> <br/>

```
import React, { useState } from 'react';
import { Button } from '57wng/dist';

const Component = () => {
  const [state, setState] = useState('');

  return (
    <div>
      <Radio
        options={['Option 1',  'Option 2']}
        name={'TEST'}
        inline={true}
        onChange={(event)  => setState(event)}
        state={state}
      />
    </div>
  )
}

export default Button;
```

<hr/>

## INFO DISPLAY
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
| Select |  |  | [here](https://mui.com/components/selects/) |
| Slider |  |  | [here](https://mui.com/components/slider/) | 
| Badge |  |  | [here](https://mui.com/components/badges/) |
| Chip |  |  | [here](https://mui.com/components/chips/) |  
| Radio |  |  | [here](https://mui.com/components/radio-buttons/) |  
| A |  |  | [here](https://mui.com/components/links/) |

if it is currently in progress please put a link to the working branch in the `in progress` column and your name in the `by` column.

| components | in progress | by | example |
|--|--|--|--|
| Alert |  |  | [here](https://mui.com/components/alert/) |
| Accordion |  |  | [here](https://mui.com/components/accordion/) |
| Card |  |  | [here](https://mui.com/components/cards/) |
| Nav |  |  | [here](https://material.io/components/navigation-drawer#anatomy) |

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
