

# 57 Wing Component Library

## QUICK NOTE
### DO NOT WORK ON `MASTER` BRANCH

##### Branch Naming
`Feature/Bug/Hotfix_NameOfComponent_BranchedFrom_ByDeveloper`
<br/>
`Feature/Radio_Main_FirstNameLastName`

### Table Of Contents
README [text editor](https://stackedit.io)

 1. [Data Inputs](#data-inputs)
	1. [Button](#button)
	2. [Input](#input)
	3. [Textarea](#textarea)
2. [Info Display](#info-display)
	1. [Modal](#modal)
	2. [Avatar](#avatar)
	3. [Loading](#loading)

## GETTING STARTED


Install - `npm i 57wng`
<br/>
Import - `import {Componenent} from '57wng/dist`

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

```

```

<hr/>



### Input

```

```

<hr/>



### Textarea

```

```

## INFO DISPLAY
[top](#table-of-contents)

### Modal

```

```

<hr/>



### Avatar

PROPS <br/>
`size` - changes the size of the avatar image <br/>
`image` - url pointing to an image file <br/>
`customClass` - adds a class to the avatar component container  <br/>


| Size | size |
|--|--|
| "lg" | 200px |
| "md" | 100px |
| "sm" | 50px |

```
import {Avatar} from '57wng/dist';

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
The loading component does not take any customization props. The external spinning circle is the `$secondary` color and the inner spinning circle is the `$primary` color.
```
import {Loading} from '57wng/dist';

const Component = () => {
	return (
		<div>
			<Loading />
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
