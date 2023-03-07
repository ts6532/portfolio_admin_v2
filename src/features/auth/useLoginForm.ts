import { useAuthStore } from "entities/auth"
import type { FormInst, FormRules } from "naive-ui"
import type { LoginDataDto } from "shared/api"
import { ref, type Ref } from "vue"
import { useRouter } from "vue-router"

export interface UseLoginFormOptions {
  formRef: Ref<FormInst | null>
}

export interface UseLoginFormReturn {
  formModel: Ref<LoginDataDto>
  rules: FormRules
  handleValidateClick: (e: MouseEvent) => void
}

export const useLoginForm = ({
  formRef,
}: UseLoginFormOptions): UseLoginFormReturn => {
  const store = useAuthStore()

  const router = useRouter()

  const formModel = ref<LoginDataDto>({
    email: "",
    password: "",
  })

  const rules: FormRules = {
    email: {
      required: true,
      message: "Please input email",
      trigger: ["input", "blur"],
    },

    password: {
      required: true,
      message: "Please input password",
      trigger: ["input", "blur"],
    },
  }

  function handleValidateClick(e: MouseEvent) {
    e.preventDefault()
    
    formRef.value?.validate(async (errors) => {
      if (!errors) {
        try {
          await store.login(formModel.value)
          router.push({ name: "home" })
        } catch (e) {
          console.log(e)
        }
      }
    })
  }

  return { rules, formModel, handleValidateClick }
}
