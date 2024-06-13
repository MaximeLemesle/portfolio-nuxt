<template>
  <Tabs
    :model-value="tabsRef"
    @update:modelValue="updateTab"
    class="w-4/5 m-12"
  >
    <TabsList class="grid w-full grid-cols-3">
      <TabsTrigger value="step1"> Étape 1 </TabsTrigger>
      <TabsTrigger value="step2"> Étape 2 </TabsTrigger>
      <TabsTrigger value="step3"> Étape 3 </TabsTrigger>
    </TabsList>

    <TabsContent value="step1" force-mount>
      <Card class="flex flex-col items-center justify-between h-96">
        <CardHeader>
          <CardTitle>Vous me contacter pour :</CardTitle>
        </CardHeader>
        <CardContent class="w-full">
          <RadioGroup
            v-model="formData.reason"
            class="flex flex-col items-center space-y-4"
          >
            <div
              class="flex items-center border border-bg-muted rounded w-3/6 hover:border-accent text-muted-foreground"
              :class="{
                'border-accent text-accent dark:text-white': formData.reason === 'new_project',
              }"
            >
              <RadioGroupItem id="r1" value="new_project" class="hidden" />
              <Label for="r1" class="py-3 px-4 w-full cursor-pointer"
                >Faire une demande de projet</Label
              >
            </div>
            <div
              class="flex items-center border border-bg-muted rounded w-3/6 hover:border-accent text-muted-foreground"
              :class="{
                'border-accent text-accent dark:text-white':
                  formData.reason === 'follow_project',
              }"
            >
              <RadioGroupItem id="r2" value="follow_project" class="hidden" />
              <Label for="r2" class="py-3 px-4 w-full cursor-pointer"
                >Suivre mon projet</Label
              >
            </div>
            <div
              class="flex items-center border border-bg-muted rounded w-3/6 hover:border-accent text-muted-foreground"
              :class="{
                'border-accent text-accent dark:text-white': formData.reason === 'send_message',
              }"
            >
              <RadioGroupItem id="r3" value="send_message" class="hidden" />
              <Label for="r3" class="py-3 px-4 w-full cursor-pointer"
                >Envoyer un message</Label
              >
            </div>
          </RadioGroup>
        </CardContent>
        <CardFooter class="flex justify-between w-full">
          <Button disabled>Précédent</Button>
          <Button @click="nextStep('step2')">Suivant</Button>
        </CardFooter>
      </Card>
    </TabsContent>

    <TabsContent value="step2" force-mount>
      <Card class="flex flex-col items-center justify-between h-96">
        <CardHeader>
          <CardTitle>Votre message :</CardTitle>
        </CardHeader>
        <CardContent class="w-3/6 flex flex-col items-center space-y-4">
          <textarea
            v-model="formData.message"
            id="message"
            class="input w-full h-full bg-muted border border-bg-muted rounded hover:border-accent px-3 py-2"
            rows="8"
            placeholder="Écrivez votre message ici..."
          ></textarea>
        </CardContent>
        <CardFooter class="flex justify-between w-full">
          <Button @click="prevStep('step1')">Précédent</Button>
          <Button @click="nextStep('step3')">Suivant</Button>
        </CardFooter>
      </Card>
    </TabsContent>

    <TabsContent value="step3" force-mount>
      <Card class="flex flex-col items-center justify-between h-96">
        <CardHeader>
          <CardTitle>Vos informations :</CardTitle>
        </CardHeader>
        <CardContent class="w-3/6 flex flex-col items-center space-y-4">
          <div class="grid w-full max-w-sm items-center gap-1.5">
            <Label for="firstname">Prénom</Label>
            <Input
              v-model="formData.firstname"
              id="firstname"
              placeholder="John"
            />
          </div>
          <div class="grid w-full max-w-sm items-center gap-1.5">
            <Label for="lastname">Nom</Label>
            <Input
              v-model="formData.lastname"
              id="lastname"
              type="text"
              placeholder="Doe"
            />
          </div>
        </CardContent>
        <CardFooter class="flex justify-between w-full">
          <Button @click="prevStep('step2')">Précédent</Button>
          <Button @click="handleSubmit">Envoyer</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  </Tabs>

  <Toaster />
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "@/components/ui/toast/use-toast";

const { toast } = useToast();

const tabsRef = ref("step1");
const formData = ref({
  reason: "",
  message: "",
  firstname: "",
  lastname: "",
});

const nextStep = (nextValue) => {
  tabsRef.value = nextValue;
};

const prevStep = (prevValue) => {
  tabsRef.value = prevValue;
};

const updateTab = (newValue) => {
  tabsRef.value = newValue;
};

const handleSubmit = () => {
  const now = new Date();
  const formattedDate = new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "full",
  }).format(now);
  let title = "";
  let firstname = "";
  let lastname = "";

  if (formData.value.reason = "new_project") {
    title = "Mon nouveau projet !";
  } else if (formData.value.reason = "follow_project") {
    title = "Comment va mon projet ?";
  } else {
    title = "Comment ça va ?";
  }

  toast({
    title: title,
    description: `
        Voici mon message: "${formData.value.message}""
        de la part de ${formData.value.firstname} ${formData.value.lastname} 
        envoyé le ${formattedDate}
      `,
  });
};
</script>
