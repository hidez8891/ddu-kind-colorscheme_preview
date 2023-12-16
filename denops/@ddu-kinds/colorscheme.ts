import {
  DduItem,
  PreviewContext,
  Previewer,
} from "https://deno.land/x/ddu_vim@v3.8.1/types.ts";
import {
  Denops,
} from "https://deno.land/x/ddu_vim@v3.8.1/deps.ts";
import {
    Kind as ColorschemeKind
} from "https://raw.githubusercontent.com/4513ECHO/ddu-source-colorscheme/main/denops/%40ddu-kinds/colorscheme.ts";

export type ActionData = {
    name: string;
};

export class Kind extends ColorschemeKind {
    override async getPreviewer(args: {
        denops: Denops;
        item: DduItem;
        actionParams: unknown;
        previewContext: PreviewContext;
    }): Promise<Previewer | undefined> {
        const { name } = args.item.action as ActionData;
        await args.denops.cmd(
            `let g:ddu#preview#colorsheme = get(g:, 'ddu#preview#colorsheme', g:colors_name)`
        );
        await args.denops.cmd(
            `silent colorscheme ${name}`,
        );
        return {
            kind: "nofile",
            contents: [name],
            syntax: "ddu-preview-colorscheme",
        };
    }
};