if exists('g:loaded_ddu_preview_colorscheme')
	finish
endif
let g:loaded_ddu_preview_colorscheme = 1

augroup ddu_preview_colorscheme
	autocmd!
	autocmd BufHidden ddu-ff:preview call s:ddu_preview_colorscheme_close()
augroup END

function! s:ddu_preview_colorscheme_close() abort
	if exists('g:ddu#preview#colorsheme')
		silent execute 'colorscheme ' .. g:ddu#preview#colorsheme
		unlet g:ddu#preview#colorsheme
	endif
endfunction
