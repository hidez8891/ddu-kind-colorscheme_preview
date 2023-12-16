autocmd Syntax ddu-preview-colorscheme call s:ddu_preview_setup()
function! s:ddu_preview_setup() abort
	augroup ddu_preview_colorscheme
		autocmd!
		autocmd BufHidden ddu-ff:preview silent execute 'colorscheme ' .. g:ddu#preview#colorsheme
		autocmd BufHidden ddu-ff:preview unlet g:ddu#preview#colorsheme
	augroup END
endfunction