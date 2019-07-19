const changelog = {
  'Root': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'Accordion': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'Alert': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'Avatar': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'AvatarStack': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'Box': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'Button': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'Brand': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'Calendar': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'Card': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'Chat': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'Checkbox': {
    added: [],
    fixed: [],
    changed: [],
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
    breakingChange: []
  },
  'ChipsGroup': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'CollapsableText': {
    added: [],
    fixed: [],
    changed: [],
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
    breakingChange: [
      {
        version: '21.0.0',
        message: 'Removed from `Color` and `Color.Background`: `primary` shades 100, 800 and 900.',
        prNr: '718'
      }
    ]
  },
  'copyToClipboardButton': {
    changed: [
      {
        version: '27.0.0',
        message: '`copyToClipboardButton` - now receives any child for its content',
        prNr: '876'
      }
    ]
  },
  'Dialog': {
    added: [
      {
        version: '23.2.0',
        message: 'Support for data attributes on `Dialog`, `Dialog.Content`, `Dialog.Actions`, `Section`, `Table.Header`, `Table.Data` and `Table.Row`.',
        prNr: '782'
      }
    ],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'Divider': {
    added: [],
    fixed: [],
    changed: [],
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
    breakingChange: [
      {
        version: '27.0.0',
        message: '`Dock` structure changes: `Dock.Drawer` now requires a `Dock.Actions` to render the close button; `open` bool prop removed from `Dock.Drawer`.',
        prNr: '870'
      }
    ]
  },
  'Dropdown': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'EmptyWidget': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'Flag': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'Form': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'FormEmailField': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'FormField': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'FormFieldGroup': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'Footer': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'Footnote': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'GradientWrapper': {
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
    breakingChange: []
  },
  'Icon': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'Illustration': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'Image': {
    added: [],
    fixed: [],
    changed: [],
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
  },
  'Link': {
    added: [],
    fixed: [],
    changed: [],
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
    breakingChange: []
  },
  'Media': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'Message': {
    changed: [
      {
        version: '26.0.0',
        message: 'Auto-dismiss `Message` component now pauses the timer when the window/tab is not active.',
        prNr: '843'
      }
    ]
  },
  'Modal': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'Nav': {
    added: [
      {
        version: '27.0.0',
        message: '`Nav`, `PanelsLayout.Content` and `PanelsLayout.Panel` children prop type is now `any` and not required.',
        prNr: '865'
      }
    ]
  },
  'Navbar': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'NavbarLink': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'NavbarPopupLink': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'NumberInput': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'Page': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'Pagination': {
    added: [],
    fixed: [],
    changed: [],
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
    changed: [
      {
        version: '27.0.0',
        message: '`Nav`, `PanelsLayout.Content` and `PanelsLayout.Panel` children prop type is now `any` and not required.',
        prNr: '865'
      }
    ],
  },
  'Patterns': {
    added: [],
    fixed: [],
    changed: [],
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
    changed: [
      {
        version: '26.0.0',
        message: '`Popup.Content` and `PopupStateful.Content` with `List`s inside now need the `noPadding` prop to render correctly.',
        prNr: '839'
      }
    ],
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
    breakingChange: []
  },
  'Rating': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
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
    breakingChange: []
  },
  'Section': {
    added: [
      {
        version: '23.2.0',
        message: 'Support for data attributes on `Dialog`, `Dialog.Content`, `Dialog.Actions`, `Section`, `Table.Header`, `Table.Data` and `Table.Row`.',
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
    breakingChange: []
  },
  'SectionGroup': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'SelectionGroup': {
    added: [],
    fixed: [],
    changed: [
      {
        version: '26.0.0',
        message: 'Updated `SelectionGroup` component to support tooltip via `data-attr`.',
        prNr: '846'
      }
    ],
    breakingChange: []
  },
  'SidePanel': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'TagsInput': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'PhoneInput': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'Table': {
    added: [
      {
        version: '23.2.0',
        message: 'Support for data attributes on `Dialog`, `Dialog.Content`, `Dialog.Actions`, `Section`, `Table.Header`, `Table.Data` and `Table.Row`.',
        prNr: '782'
      },
      {
        version: '27.0.0',
        message: 'Support for data attributes on `ExpandableRow` and `ExpandedRowData` components.',
        prNr: '885'
      }
    ],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'Textarea': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'TextInput': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'Timepicker': {
    added: [
      {
        version: '27.0.0',
        message: '`daySpan` numeric prop to `Timepicker` component.',
        prNr: '869'
      }
    ]
  },
  'Timezone': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'TimezoneDropdown': {
    added: [
      {
        version: '27.0.0',
        message: '`disabled` bool prop to `TimezoneDropdown` component.',
        prNr: '868'
      }
    ]
  },
  'Toaster': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'Toggle': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'Toolbar': {
    added: [],
    fixed: [],
    changed: [],
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
      },
      {
        version: '26.0.0',
        message: 'Updated `SelectionGroup` component to support tooltip via `data-attr`.',
        prNr: '846'
      },
    ],
    breakingChange: []
  },
  'Typography': {
    added: [],
    fixed: [],
    changed: [],
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
    ]
  },
  'Wizard': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  },
  'WizardHead': {
    added: [],
    fixed: [],
    changed: [],
    breakingChange: []
  }
}

export default changelog
