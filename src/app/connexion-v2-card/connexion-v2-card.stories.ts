import { CommonModule } from "@angular/common";
import { ConnexionV2CardComponent } from "./connexion-v2-card.component";                                                                           
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { NgHeroiconsModule } from "@dimaslz/ng-heroicons";

export default {
    title: 'Connexion/ConnexionV2Card',
    component: ConnexionV2CardComponent,
    decorators: [
        moduleMetadata({
            imports: [
                CommonModule,
                NgHeroiconsModule
            ],
        })
    ],
    args: {
        title: 'Default',
    }
} as Meta<ConnexionV2CardComponent>;

const baseTemplate: Story = (args) => ({
    props: args
});

export const Default = baseTemplate.bind({});
