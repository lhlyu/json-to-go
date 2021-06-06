// 事件
import bus from './index'
import { Ref } from 'vue'
import { Ace } from 'ace-builds'

import { Codegen, CodegenStrategy } from '../core/strategy'
import { Option } from '../core/types'

// 配置
interface ISetting {
    // 生成策略
    codegenStrategy: CodegenStrategy
    // 其他配置
    opt?: Option
}
const _setting: ISetting = {
    codegenStrategy: CodegenStrategy.GOLANG,
}

// 设置策略
export const setCodegenStrategy = (val: number) => {
    _setting.codegenStrategy = val
    onLeftEditorTransform()
}

export const setCodegenStrategyOption = (opt?: Option) => {
    if (!opt) {
        return
    }
    _setting.opt = Object.assign({}, _setting.opt, opt)
    onLeftEditorTransform()
}

// 左侧部分
// 设置值事件
const LEFT_EDITOR_SET = 'left.editor.set'
// 校正
const LEFT_EDITOR_CHECK = 'left.editor.check'
// 格式化
const LEFT_EDITOR_FMT = 'left.editor.fmt'
// 压缩
const LEFT_EDITOR_COMPRESS = 'left.editor.compress'
// 转换
const LEFT_EDITOR_TRANSFORM = 'left.editor.transform'

// 设置值
export const setLeftEditorValue = (val: string) => {
    bus.emit(LEFT_EDITOR_SET, val)
}
export const onLeftEditorCheck = () => {
    bus.emit(LEFT_EDITOR_CHECK)
}
export const onLeftEditorFmt = () => {
    bus.emit(LEFT_EDITOR_FMT)
}
export const onLeftEditorCompress = () => {
    bus.emit(LEFT_EDITOR_COMPRESS)
}
export const onLeftEditorTransform = () => {
    bus.emit(LEFT_EDITOR_TRANSFORM)
}

export function useLeftEditorEvent(editor: Ref<Ace.Editor>) {
    const cg = new Codegen()
    // 监听值变化
    bus.on(LEFT_EDITOR_SET, val => {
        editor.value.setValue(val)
        editor.value.execCommand("gotolineend")
    })

    bus.on(LEFT_EDITOR_CHECK, () => {
        const s = cg.do(CodegenStrategy.JSON, editor.value.getValue(), {
            format: true
        })
        setLeftEditorValue(s)
    })

    bus.on(LEFT_EDITOR_FMT, () => {
        const s = cg.do(CodegenStrategy.JSON, editor.value.getValue(), {
            format: true
        })
        setLeftEditorValue(s)
    })

    bus.on(LEFT_EDITOR_COMPRESS, () => {
        const s = cg.do(CodegenStrategy.JSON, editor.value.getValue())
        setLeftEditorValue(s)
    })

    bus.on(LEFT_EDITOR_TRANSFORM, () => {
        const s = cg.do(_setting.codegenStrategy, editor.value.getValue(), _setting.opt)
        setRightEditorValue(s)
    })
}


// 右侧部分
const RIGHT_EDITOR_SET = 'right.editor.set'
const RIGHT_EDITOR_READONLY = 'right.editor.readonly'


export const setRightEditorValue = (val: string) => {
    bus.emit(RIGHT_EDITOR_SET, val)
}

// 设置只读
export const setRightEditorReadonly = (val: boolean) => {
    bus.emit(RIGHT_EDITOR_READONLY, val)
}

export function useRightEditorEvent(editor: Ref<Ace.Editor>) {
    // 监听值变化
    bus.on(RIGHT_EDITOR_SET, val => {
        editor.value.setValue(val)
        editor.value.execCommand('gotolineend')
    })

    bus.on(RIGHT_EDITOR_READONLY, val => {
        editor.value.setReadOnly(val)
    })
}


