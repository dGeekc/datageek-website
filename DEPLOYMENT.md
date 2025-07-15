# 🚀 Guia de Deploy - GitHub Pages

Guia passo a passo para hospedar o site da DataGeek no GitHub Pages com domínio customizado.

## 📅 Pré-requisitos

- [x] Conta no GitHub
- [x] Domínio próprio (opcional)
- [x] Git instalado localmente

## 1️⃣ Criar Repositório no GitHub

1. Acesse [GitHub](https://github.com) e faça login
2. Clique em **"New repository"**
3. Nomeie o repositório (ex: `datageek-website`)
4. Marque como **Público**
5. **Não** inicialize com README (já temos os arquivos)
6. Clique em **"Create repository"**

## 2️⃣ Configurar Git Local

No terminal, dentro da pasta do projeto:

```bash
# Inicializar repositório git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit inicial
git commit -m "Initial commit: DataGeek website"

# Adicionar repositório remoto (substitua pelos seus dados)
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git

# Configurar branch principal
git branch -M main

# Enviar para GitHub
git push -u origin main
```

## 3️⃣ Ativar GitHub Pages

1. No seu repositório GitHub, vá em **Settings**
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione:
   - **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
4. Clique em **Save**

✅ Seu site estará disponível em: `https://seu-usuario.github.io/nome-do-repo`

## 4️⃣ Configurar Domínio Customizado (Opcional)

### A. Atualizar arquivo CNAME

1. Edite o arquivo `CNAME` na raiz do projeto:
```
seudominio.com
```

2. Faça commit e push:
```bash
git add CNAME
git commit -m "Add custom domain"
git push
```

### B. Configurar DNS no Provedor de Domínio

#### Para domínio apex (seudominio.com):
```
Tipo: A
Nome: @ (ou deixe vazio)
Valor: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

#### Para subdomínio www:
```
Tipo: CNAME
Nome: www
Valor: seu-usuario.github.io
```

### C. Ativar HTTPS no GitHub

1. Vá em **Settings** → **Pages**
2. Em **Custom domain**, digite seu domínio
3. Aguarde a verificação DNS (✅ deve aparecer)
4. Marque **Enforce HTTPS**

## 5️⃣ Verificar Deploy

### Status do Deploy
- Vá na aba **Actions** do repositório
- Veja o status do workflow de deploy
- ✅ = Deploy realizado com sucesso
- ❌ = Erro no deploy (verifique os logs)

### Testar o Site
- Acesse sua URL: `https://seudominio.com`
- Verifique se todas as seções estão funcionando
- Teste em diferentes dispositivos

## 6️⃣ Atualizações Futuras

Para atualizar o site:

```bash
# Fazer alterações nos arquivos
# Adicionar e fazer commit
git add .
git commit -m "Update: descrição das mudanças"
git push
```

✨ **O deploy é automático!** A cada push na branch `main`, o site é atualizado automaticamente.

## 🔍 Solução de Problemas

### Site não carrega
- Verifique se o GitHub Pages está ativado
- Confirme que os arquivos estão na branch `main`
- Aguarde alguns minutos após o deploy

### Domínio customizado não funciona
- Verifique as configurações DNS (pode levar até 48h)
- Confirme que o arquivo `CNAME` está correto
- Teste com `nslookup seudominio.com`

### Erro 404
- Verifique se o arquivo `index.html` está na raiz
- Confirme que não há erros de sintaxe no HTML

### Imagens não carregam
- Verifique se os caminhos das imagens estão corretos
- Confirme que as imagens estão no repositório
- Use caminhos relativos (ex: `img/logo.png`)

## 📊 Monitoramento

### Analytics (Opcional)
Para adicionar Google Analytics:

1. Crie uma conta no Google Analytics
2. Adicione o código de tracking no `<head>` do `index.html`
3. Faça commit e push das alterações

### Performance
- Use [PageSpeed Insights](https://pagespeed.web.dev/) para verificar performance
- Teste em [GTmetrix](https://gtmetrix.com/) para métricas detalhadas

## 🎉 Parabéns!

Seu site da DataGeek agora está no ar! 🚀

**URLs do Site:**
- GitHub Pages: `https://seu-usuario.github.io/repo-name`
- Domínio Custom: `https://seudominio.com`

---

📞 **Precisa de ajuda?** Entre em contato:
- Email: contato@datageek.com.br
- Telefone: (61) 99999-9999