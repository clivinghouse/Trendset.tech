import openai
class OpenAiHelper:
    def __init__(self):
        pass
    def createBio(name,desc):        
        openai.api_key = "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" #os.getenv("OPENAI_API_KEY")
        completion = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=[
            {
                "role": "user",
                "content": "Write a tagline for a business named "+name+" for this description"+
                "```"+
                desc+
                "```"
            }
            ])
        print(completion.choices[0].message.content)