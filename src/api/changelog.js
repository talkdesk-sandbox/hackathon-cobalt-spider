const changelog = {
  'Accordion': {
    added: [
      {
        version: '21.2.0',
        message: 'Props: Mutually exclusive, `background` bool prop to add a gray background and `transparent` bool prop to remove backgrounds | Mutually exclusive, `inlineArrow` bool prop to have arrow inline and `leftArrow` bool prop to have arrow to the left | Mutually exclusive, `borderless` bool prop and `borderBottom` bool prop, are now supported.',
        prNr: '736'
      },
      {
        version: '22.0.0',
        message: 'New `Accordion` stateless component.',
        prNr: '740'
      }

    ],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: [
      {
        version: '22.0.0',
        message: '`Accordion` renamed to `AccordionStateful`. The behavior remains the same.',
        prNr: '740'
      }
    ]
  },
  'Alert': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Avatar': {
    added: [
      {
        version: '25.0.0',
        message: '`contentColor` string prop. It can receive one of Cobalt colors to define the content color of an Avatar. `backgroundColor` string prop. It can receive one of Cobalt colors to define the background color of an Avatar.',
        prNr: '804'
      }
    ],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: [
      {
        version: '25.0.0',
        message: '`primary`, `primaryAlt`, `gray`, `secondary`, `tertiary`, `red`, `yellow`, `green`, `orange` props were removed from `Avatar` component.',
        prNr: '804'
      }
    ]
  },
  'AvatarStack': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Badge': {
    added: [
      {
        version: '23.4.0',
        message: '`backgroundColor` prop added. It can receive one of Rating\'s colors.',
        prNr: '793'
      }
    ],
    fixed: [],
    changed: [
      {
        version: '23.4.0',
        message: '`Badge` component can now receive any children.',
        prNr: '793'
      }
    ],
    deprecated: [],
    breakingChange: [
      {
        version: '25.0.0',
        message: 'Due to `Chip` implementation, `Badge` component was removed.',
        prNr: '812'
      }
    ]
  },
  'Box': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Button': {
    added: [
      {
        version: '25.0.0',
        message: '`Button.INLINE_LOADING_STATE` state to `Button` component. It shows the loading animation inline with the button\'s content.',
        prNr: '821'
      }
    ],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Brand': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Calendar': {
    added: [],
    fixed: [
      {
        version: '21.1.1',
        message: '`DatePicker` and `DateRangePicker` components now renders the correct wrapper class.',
        prNr: '732'
      }
    ],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Card': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Chat': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Checkbox': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Chip': {
    added: [
      {
        version: '25.0.0',
        message: '`Chip` component.',
        prNr: '812'
      },
      {
        version: '26.0.0',
        message: '`Chip` component: `truncated` bool prop. `maxWidth` prop to determine the maximum width of a truncated chip.',
        prNr: '849'
      }
    ],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'ChipsGroup': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'CollapsableText': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Color': {
    added: [
      {
        version: '21.0.0',
        message: '`Color` and `Color.Background` now support: `midnight` shades 100 to 900; `secondary`, `tertiary`, `red`, `yellow`, `green` and `orange` shades 200 and 400; `blue` shades 200 to 700',
        prNr: '718'
      },
      {
        version: '27.0.0',
        message: 'New color shades `800` and `900` for all colors.',
        prNr: '873'
      }
    ],
    deprecated: [],
    breakingChange: [
      {
        version: '21.0.0',
        message: 'Removed from `Color` and `Color.Background`: `primary` shades 100, 800 and 900.',
        prNr: '718'
      }
    ]
  },
  'copyToClipboardButton': {
    added: [],
    fixed: [],
    changed: [
      {
        version: '27.0.0',
        message: 'Now receives any child for its content',
        prNr: '876'
      }
    ],
    deprecated: [],
    breakingChange: []
  },
  'Dialog': {
    added: [
      {
        version: '23.2.0',
        message: 'Support for data attributes.',
        prNr: '782'
      }
    ],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Divider': {
    added: [{
      version: '23.0.0',
      message: '`noMargin` bool prop . It removes the component margin. It can only be used if no `children` is present.',
      prNr: '763'
    }],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Dock': {
    added: [
      {
        version: '23.0.0',
        message: '`Dock` component.',
        prNr: '783'
      },
      {
        version: '25.0.0',
        message: '`Dock` component now hides overflowed app icons when there is not enough space to display them all. `appName` string prop to `DockButton` component.',
        prNr: '819'
      },
      {
        version: '27.0.0',
        message: '`hasDrawer` bool prop to `Dock`.',
        prNr: '867'
      },
      {
        version: '27.0.0',
        message: 'Support for data attributes on `Dock.Item` component',
        prNr: '877'
      },
    ],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: [
      {
        version: '27.0.0',
        message: '`Dock` structure changes: `Dock.Drawer` now requires a `Dock.Actions` to render the close button; `open` bool prop removed from `Dock.Drawer`.',
        prNr: '870'
      }
    ]
  },
  'Dropdown': {
    added: [
      {
        version: '21.1.0',
        message: '`id` string prop and `onFocus` func prop event callback',
        prNr: '717'
      },
      {
        version: '23.0.0',
        message: '`onFocus` func prop event callback to `MultiDropdown`component. It is called only if the component is not opened.',
        prNr: '756'
      },
      {
        version: '23.2.0',
        message: '`clearable` bool prop to `Dropdown` component. It cannot be used with the `borderless` prop at the same time.',
        prNr: '781'
      },
      {
        version: '23.3.0',
        message: '`Dropdown.LoadMore` component. It accepts: a string as a child, a `loading` bool prop to add a loader, a `onClick` func as a callback and data attributes.',
        prNr: '787'
      },
      {
        version: '25.0.0',
        message: '`Dropdown` stateless component.',
        prNr: '817'
      }
    ],
    fixed: [
      {
        version: '23.3.1',
        message: 'Options with the same `text` are now evaluated correctly when selected in `MultiDropdown` component.',
        prNr: '791'
      },
      {
        version: '24.0.1',
        message: '`Dropdown` selected values now truncates correctly.',
        prNr: '798'
      }
    ],
    changed: [
      {
        version: '25.0.0',
        message: '`DropdownStateful` now renders an `EMPTY` or `CHECK` icon.',
        prNr: '817'
      },
      {
        version: '25.0.0',
        message: '`Dropdown` placeholder prop now accepts any node.',
        prNr: '834'
      }
    ],
    deprecated: [],
    breakingChange: [
      {
        version: '24.0.1',
        message: '`Dropdown` and `MultiDropdown` components. A lot of changes were made, please check [v24 update guide](./updateGuides/v24-update-guide.md) for more info.',
        prNr: ''
      },
      {
        version: '25.0.0',
        message: '`Dropdown` component renamed to `DropdownStateful`.',
        prNr: '817'
      },
      {
        version: '26.0.0',
        message: '`Dropdown` and `MultiDropdown` components now return `null` when the values are cleared or all unselected.',
        prNr: '855'
      }
    ]
  },
  'EmptyWidget': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: [
      {
        version: '25.0.0',
        message: 'Requires children (`Icon` or `Image`). Removed `type` prop to define which image to render.',
        prNr: '813'
      }
    ]
  },
  'Flag': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Form': {
    added: [
      {
        version: '21.1.0',
        message: '`Form.Field` label now focus its associated field on `click`',
        prNr: '717'
      },
      {
        version: '21.2.0',
        message: 'Custom validation in `Form.Field` wasn\'t being performed on empty text input.',
        prNr: '728'
      },
      {
        version: '23.0.0',
        message: '`smallLabel` and `largeLabel` mutually exclusive bool props to to `Form.Field`.',
        prNr: '759'
      },
      {
        version: '24.0.1',
        message: '`Form.FieldGroup` component: `small` and `large` bool props. They control the size of the inputs inside the group.`Form.FieldGroup.TextLabel` component. It renders a `span` but supports different sizes.',
        prNr: '806'
      }
    ],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Footer': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Footnote': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'GradientWrapper': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: [
      {
        version: '27.0.0',
        message: '`GradientWrapper` component was removed.',
        prNr: '866'
      }
    ]
  },
  'Grid': {
    added: [
      {
        version: '27.0.0',
        message: '`data-props` to `Grid.Column`, `Grid.Group`.',
        prNr: '875'
      },
      {
        version: '21.1.0',
        message: '`auto` breakpoint value to `Grid.Column` (default value in `all` breakpoint prop).',
        prNr: '727'
      },
    ],
    fixed: [
      {
        version: '21.1.0',
        message: '`Grid.Column` wasn\'t receiving element class (`co-grid__column`).',
        prNr: '723'
      }
    ],
    changed: [
      {
        version: '21.1.0',
        message: 'Reverted Alignment props deprecation in `Grid.Column` component. These props won\'t be removed.',
        prNr: '726'
      }
    ],
    deprecated: [],
    breakingChange: [
      {
        version: '21.1.0',
        message: '`Grid` component\'s `fluid` bool prop renamed to `fullWidth`.',
        prNr: '715'
      },
      {
        version: '21.1.0',
        message: '`tiny` and `xlarge` props removed from `Grid.Column`.',
        prNr: '716'
      }
    ]
  },
  'Header': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Icon': {
    added: [
      {
        version: '24.0.1',
        message: '`tiny` bool prop added to `Icon` component. It is set to `true` by default.',
        prNr: '806'
      }
    ],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Illustration': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Image': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'LabeledIcon': {
    added: [
      {
        version: '25.0.0',
        message: '`info`, `feature`, `success`, `warning` and `danger` bool props added to `LabeledIcon` component.',
        prNr: '812'
      },
      {
        version: '26.0.0',
        message: '`fontSmall` bool prop to `LabeledIcon` component.',
        prNr: '842'
      }
    ],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Link': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'List': {
    added: [
      {
        version: '21.1.1',
        message: '`disabled` and `danger` bool props to `List.Item`.',
        prNr: '724'
      },
      {
        version: '23.1.0',
        message: '`truncated` bool prop in `List.Item.Content` component.',
        prNr: '776'
      }
    ],
    fixed: [
      {
        version: '26.0.0',
        message: '`List` was not correctly wrapping numeric content in `List.Item.Content`.',
        prNr: '854'
      }
    ],
    changed: [
      {
        version: '26.0.0',
        message: '`Popup.Content` and `PopupStateful.Content` with `List`s inside now need the `noPadding` prop to render correctly.',
        prNr: '839'
      }
    ],
    deprecated: [],
    breakingChange: []
  },
  'Loader': {
    added: [
      {
        version: '22.0.0',
        message: '`MEDIUM_SIZE` in `Loader` component.',
        prNr: '746'
      },
      {
        version: '27.0.0',
        message: '`inline` bool prop to `Loader` component.',
        prNr: '848'
      }
    ],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: [
      {
        version: '27.0.0',
        message: '`Loader` component: Removed `size` prop. Bool props `tiny`, `small`, `medium`, `large` and `xlarge` can now be used to define size (or none, for default size). Removed `message` prop. Message content should now be a children of the component.',
        prNr: '848'
      }
    ]
  },
  'LoadingPlaceholder': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Media': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Message': {
    changed: [
      {
        version: '26.0.0',
        message: 'Auto-dismiss `Message` component now pauses the timer when the window/tab is not active.',
        prNr: '843'
      }
    ],
    fixed: [
      {
        version: '23.0.0',
        message: 'Fixed icons of Warning/Error `Message` to respect Design\'s specification.',
        prNr: '753'
      }
    ],
    deprecated: [],
    breakingChange: []
  },
  'Modal': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Nav': {
    added: [
      {
        version: '27.0.0',
        message: 'Children prop type is now `any` and not required.',
        prNr: '865'
      }
    ],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Navbar': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: [
      {
        version: '22.0.0',
        message: '`vertical` prop removed from `Navbar`.',
        prNr: '749'
      }
    ]
  },
  'NavbarLink': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'NavbarPopupLink': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'NumberInput': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Page': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Pagination': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'PanelsLayout': {
    added: [
      {
        version: '21.0.0',
        message: '`PanelsLayout` component.',
        prNr: '711'
      },
      {
        version: '21.2.0',
        message: '`PanelsLayout.Panel` component: has now an inbuilt tab trap. It pauses the tab-trap when one clicks outside the `PanelsLayout.Panel`. Adds `id` string prop',
        prNr: '739'
      },
      {
        version: '27.0.0',
        message: '`onClickOutside` func prop to `PanelsLayout.Panel` component.',
        prNr: '865'
      }
    ],
    fixed: [],
    changed: [
      {
        version: '27.0.0',
        message: 'Childrens prop types are now `any` and not required.',
        prNr: '865'
      }
    ],
    deprecated: [],
    breakingChange: []
  },
  'Patterns': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Popup': {
    added: [
      {
        version: '22.0.0',
        message: '`Popup` component is now stateless. To keep using the old version, use the renamed `PopupStateful`.',
        prNr: '750'
      },
      {
        version: '22.0.0',
        message: '`defaultOpen` bool prop in `PopupStateful` component.',
        prNr: '750'
      }
    ],
    fixed: [],
    changed: [
      {
        version: '26.0.0',
        message: '`Popup.Content` and `PopupStateful.Content` with `List`s inside now need the `noPadding` prop to render correctly.',
        prNr: '839'
      }
    ],
    deprecated: [],
    breakingChange: [
      {
        version: '22.0.0',
        message: '`Popup` renamed to `PopupStateful`',
        prNr: '750'
      }
    ]
  },
  'Radio': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Rating': {
    added: [
      {
        version: '23.2.0',
        message: '`Rating` stateless component.',
        prNr: '774'
      },
      {
        version: '24.0.1',
        message: '`RatingStateful` component.',
        prNr: '785'
      }
    ],
    fixed: [
      {
        version: '24.0.1',
        message: '`RatingStateful` now correctly imports `Color`.',
        prNr: '809'
      }
    ],
    changed: [],
    deprecated: [],
    breakingChange: [
      {
        version: '24.0.1',
        message: 'In `Rating` stateless component: `onMouseOver` prop renamed to `onMouseEnter, `onMouseOut` prop renamed to `onMouseLeave`',
        prNr: '809'
      }
    ]
  },
  'Search': {
    added: [
      {
        version: '21.1.0',
        message: '`Search` component: `id` string prop',
        prNr: '717'
      },
      {
        version: '26.0.0',
        message: '`small` and `large` bool prop to `Search` component.',
        prNr: '850'
      }
    ],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Section': {
    added: [
      {
        version: '23.2.0',
        message: 'Support for data attributes.',
        prNr: '782'
      }
    ],
    fixed: [],
    changed: [
      {
        version: '27.0.0',
        message: 'Section` inside `SectionGroup` no longer requires a `Header` as first child.',
        prNr: '878'
      }
    ],
    deprecated: [],
    breakingChange: []
  },
  'SectionGroup': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'SelectionGroup': {
    added: [
      {
        version: '21.2.0',
        message: '`id`, `tabIndex`, `fullWidth` and `name` string props to `SelectionGroup`.',
        prNr: '735'
      }
    ],
    fixed: [
      {
        version: '23.0.1',
        message: '`SelectionGroup.Option` now renders the correct `id` to both `label` and `input` when no `id` prop is provided.',
        prNr: '770'
      }
    ],
    changed: [
      {
        version: '21.1.0',
        message: '`value` prop can now be `string` or `number`.',
        prNr: '729'
      },
      {
        version: '26.0.0',
        message: 'Updated `SelectionGroup` component to support tooltip via `data-attr`.',
        prNr: '846'
      }
    ],
    deprecated: [
      {
        version: '21.2.0',
        message: '`fluid` prop. Use `fullWidth` instead.',
        prNr: '735'
      }
    ],
    breakingChange: []
  },
  'SidePanel': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Tag': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: [
      {
        version: '25.0.0',
        message: 'Due to `Chip` implementation, `Tag` was removed.',
        prNr: '812'
      }
    ]
  },
  'TagsGroup': {
    added: [
      {
        version: '23.1.0',
        message: '`popupHeaderTitle` prop in `TagsGroup` component. It expects a string or a function. The function should expect the number of tags as argument.',
        prNr: '775'
      }
    ],
    fixed: [
      {
        version: '23.3.1',
        message: '`TagsGroup` component: when it has less than two tags, it renders correctly, it now renders correctly when the container is right aligned.',
        prNr: '790'
      }
    ],
    changed: [],
    deprecated: [],
    breakingChange: [
      {
        version: '25.0.0',
        message: 'Due to `Chip` implementation, `TagsGroup` renamed to `ChipsGroup`.',
        prNr: '812'
      }
    ]
  },
  'TagsInput': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'PhoneInput': {
    added: [
      {
        version: '25.0.0',
        message: '`PhoneInput` component.',
        prNr: '815'
      },
      {
        version: '25.0.0',
        message: '`pattern` string prop to `TextInput` and `PhoneInput`. It accepts a regular expression that the input\'s value must match in order for the value to pass constraint validation.',
        prNr: '815'
      }
    ],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Table': {
    added: [
      {
        version: '23.0.0',
        message: '`width` string prop on `Table.Data` when used in `Table.Virtualized` component now works as expected.',
        prNr: '754'
      },
      {
        version: '23.0.0',
        message: 'Fixed `Table.Header` with `width` and not `sortable` rendering on `Table.Virtualized`  `sortable` component. It now renders the correct HTML element.',
        prNr: '765'
      },
      {
        version: '23.2.0',
        message: 'Support for data attributes on `Dialog`, `Dialog.Content`, `Dialog.Actions`, `Section`, `Table.Header`, `Table.Data` and `Table.Row`.',
        prNr: '782'
      },
      {
        version: '23.5.0',
        message: '`Table` component: `draggable` bool prop. It implements draggable Table styles., `Table.DraggableRow` component. It renders a draggable row., `onMoveRow` (drag move) and `onDropRow` (drag end) func props on `Table.Body`. Returns an array with initial and ending index.',
        prNr: '795'
      },
      {
        version: '27.0.0',
        message: 'Support for data attributes on `ExpandableRow` and `ExpandedRowData` components.',
        prNr: '885'
      }
    ],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: [
      {
        version: '23.0.0',
        message: '`scrollable` prop in `Table` is now a boolean value again. Use `scrollableHeight` to define the scrolling height.',
        prNr: '742'
      }
    ]
  },
  'Textarea': {
    added: [
      {
        version: '21.0.1',
        message: '`small` bool prop to `TextArea`.',
        prNr: '717'
      },
    ],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'TextInput': {
    added: [
      {
        version: '21.0.1',
        message: '`onFocus` func prop event callback',
        prNr: '717'
      },
      {
        version: '23.0.0',
        message: '`large` bool prop on `TextInput` component. It is mutually exclusive with `small` bool prop.',
        prNr: '755'
      },
      {
        version: '25.0.0',
        message: '`pattern` string prop to `TextInput` and `PhoneInput`. It accepts a regular expression that the input\'s value must match in order for the value to pass constraint validation.',
        prNr: '815'
      }
    ],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Timepicker': {
    added: [
      {
        version: '27.0.0',
        message: '`daySpan` numeric prop to `Timepicker` component.',
        prNr: '869'
      }
    ],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Timezone': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'TimezoneDropdown': {
    added: [
      {
        version: '27.0.0',
        message: '`disabled` bool prop to `TimezoneDropdown` component.',
        prNr: '868'
      }
    ],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Toaster': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Toggle': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Toolbar': {
    added: [
      {
        version: '21.2.0',
        message: '`backgroundColor` on `Toolbar`, can only use the shade `100` of gray.',
        prNr: '737'
      }
    ],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Tooltip': {
    added: [
      {
        version: '27.0.0',
        message: '`withFlexContainer` bool prop to `Tooltip` component. It renders a span wrapper with `display: flex` property. This adds backwards compatibility to `Tooltip` from Cobalt versions prior to [v26]',
        prNr: '879'
      }
    ],
    fixed: [],
    changed: [
      {
        version: '26.0.0',
        message: 'Updated `Tooltip` component to avoid a `span` wrapper in the child component.',
        prNr: '846'
      }
    ],
    deprecated: [],
    breakingChange: []
  },
  'Typography': {
    added: [],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Viewport': {
    added: [
      {
        version: '26.0.0',
        message: '`Viewport` component. It allows showing some views depending on viewport size.',
        prNr: '837'
      },
      {
        version: '27.0.0',
        message: '`Viewport.Provider` to allow app mocking tests. Beware, this shouldn\'t be used in production.',
        prNr: '871'
      }
    ],
    fixed: [],
    changed: [],
    deprecated: [],
    breakingChange: []
  },
  'Wizard': {
    added: [
      {
        version: '21.2.0',
        message: '`errorMessage` prop to `WizardNavItem` component.',
        prNr: '743'
      }
    ],
    fixed: [],
    deprecated: [
      {
        version: '21.2.0',
        message: '`showCompletion` bool prop removed from `WizardNavItem` component. The icon is rendered automatically when needed.',
        prNr: '743'
      }
    ],
    breakingChange: []
  }
}

export default changelog
