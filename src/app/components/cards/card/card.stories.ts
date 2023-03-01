import {CardComponent} from "./card.component";
import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {CommonModule} from "@angular/common";

export default {
  title: 'Cards/Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule
      ],
    })
  ],
  args: { }
} as Meta<CardComponent>;

const baseTemplate: Story = (args) => ({
  props: args,
});

export const Default = baseTemplate.bind({});